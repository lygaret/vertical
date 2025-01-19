import { ref, computed, toRaw } from 'vue';
import { defineStore } from 'pinia';
import { partition, some } from 'lodash-es';

import ICAL from 'ical.js';

import { JSBT } from '@cheprasov/jsbt/src/JSBT';

export * from './calendarUtil'

let internalUid = 0
function makeInternalUid(prefix) {
  internalUid = internalUid + 1
  return `${prefix}-uid-${internalUid}`
}

async function makeCalendarFromICS(file) {
  const content = await file.text()
  const jcal    = ICAL.parse(content)
  const calcomp = new ICAL.Component(jcal)
  const vevents = calcomp.getAllSubcomponents("vevent")

  const mapped = vevents.map(v => {
    const event = new ICAL.Event(v)
    event.uid = event.uid || makeInternalUid("ical-event")

    try {
      // some times these dat's can't parse; we ignore them
      let startDate = event.startDate.toJSDate()
      let endDate = event.endDate.toJSDate()

      // adjust end date, ical does all day events as midnight the next day
      if (event.endDate.isDate && endDate > startDate) {
        event.endDate = ICAL.Time.fromJSDate(new Date(endDate.getTime() - 1))
      }

      return event;
    }
    catch (e) {
      return null;
    }
  }).filter(c => c !== null);

  const [exceptions, events] = partition(mapped, e => e.isRecurrenceException())
  return {
    id: file.name,
    name: calcomp.getFirstPropertyValue('x-wr-calname') || file.name,
    events,
    exceptions
  }
}

function makeEventFromICS(event) {
  return {
    uid: event.uid,       
    name: event.summary,
    startDate: event.startDate.toJSDate(),
    endDate: event.endDate.toJSDate(),
  }
}

const recurrenceIterMax = 1000;
function* expandRecurrencesFor(event, calendar, month, year) {
  const mstart = new Date(year, month, 1)
  const mend   = new Date(year, month + 1, 0)

  const estart = event.startDate.toJSDate();
  const eend   = event.endDate.toJSDate();

  if (!event.isRecurring()) {
    if (eend >= mstart && estart <= mend) {
      yield makeEventFromICS(event)
    }

    return;
  }

  const exceptions = calendar.exceptions;
  const exdates    = new Set();

  // collect exception dates
  event.component.getAllProperties("exdate").forEach(exdate => {
    exdates.add(
      exdate.getFirstValue().toJSDate().getTime()
    );
  })
  
  let next;
  let itercount = 0;

  const iterator = event.iterator();
  while((next = iterator.next()) && itercount < recurrenceIterMax) {
    const occurrence = event.getOccurrenceDetails(next)
    const ostart     = occurrence.startDate.toJSDate()
    const oend       = occurrence.endDate.toJSDate()

    // we're done if we've passed the end of the month
    if (ostart > mend) break;

    // skip if we're excluded
    if (exdates.has(ostart.getTime())) continue;

    // skip if there's an exception, we'll use those instead
    if (some(exceptions, ex => ex.uid === event.uid && toRaw(ex.recurrenceId).toJSDate().getTime() === ostart.getTime())) continue;

    // if the occurence overlaps, yield it
    if (oend >= mstart && ostart <= mend && ostart >= estart) {
      const oevent = makeEventFromICS(event)
      yield {
        ...oevent,
        startDate: occurrence.startDate.toJSDate(),
        endDate: occurrence.endDate.toJSDate(),
        recurrenceUid: oevent.uid,
        itercount,
      }
    }

    itercount++;
  }

  if (itercount === recurrenceIterMax)
    console.warn("bailed out of occurrence iterator after", itercount, "iterations, event:", event, "next occurence:", next)
}


export const useCalendarStore = defineStore('calendarStore', () => {
  const today = new Date()

  const currentMonth    = ref(today.getMonth())
  const currentYear     = ref(today.getFullYear())
  const currentCacheKey = computed(() => `${currentMonth.value}-${currentYear.value}`)

  const localEvents     = ref(new Map())
  const icsCalendars    = ref(new Map())

  const expandedCache   = new Map()
  const expandedEvents  = computed(() => {
    if (!expandedCache.has(currentCacheKey.value)) {
      const events = new Set()
      for (const calendar of icsCalendars.value.values()) {
        for (const icsEvent of [...calendar.events, ...calendar.exceptions]) {
          const rawICSEvent = toRaw(icsEvent)
          for (const recurrence of expandRecurrencesFor(rawICSEvent, calendar, currentMonth.value, currentYear.value)) {
            events.add({ ...recurrence, calendarId: calendar.id })
          }
        }
      };

      expandedCache.set(currentCacheKey.value, events);
    }

    return expandedCache.get(currentCacheKey.value)
  })

  const currentEvents = computed(() => {
    const result = {}
    const mstart = new Date(currentYear.value, currentMonth.value, 1)
    const mend   = new Date(currentYear.value, currentMonth.value + 1, 0)
    
    for (const event of [...localEvents.value.values(), ...expandedEvents.value.values()]) {
      if (event.endDate < mstart || event.startDate > mend)
        continue;

      const startDay = event.startDate < mstart ? 1 : event.startDate.getDate()
      const endDay   = event.endDate > mend     ? mend.getDate() : event.endDate.getDate()

      for (let day = startDay; day <= endDay; day++) {
        result[day] = result[day] || []
        result[day].push(event)
      }
    }

    return result
  })

  async function importICSFile(file) {
    const calendar = await makeCalendarFromICS(file)
    if (icsCalendars.value.has(calendar.id)) {
      calendar.id = makeInternalUid("calendar")
    }

    expandedCache.clear();
    icsCalendars.value.set(calendar.id, calendar)
  }

  return {
    currentEvents,
    currentMonth,
    currentYear,

    icsCalendars,
    localEvents,

    importICSFile,
  }
}, {
  persist: {
    debug: true,
    pick: ["icsCalendars", "localEvents", "currentMonth", "currentYear"],
    serializer: {
      deserialize: input => {
        const res = JSBT.decode(input)

        const icsCalendars = new Map();
        res.icsCalendars.entries().forEach(([k, v]) => {
          const events     = v.events.map((e) => ICAL.Event.fromJSBT(e))
          const exceptions = v.exceptions.map((e) => ICAL.Event.fromJSBT(e))
          icsCalendars.set(k, { ...v, events, exceptions })
        })

        return { ...res, icsCalendars }
      },
      serialize: data => {
        const raw = {
          icsCalendars: toRaw(data.icsCalendars),
          localEvents: toRaw(data.localEvents),
          currentMonth: toRaw(data.currentMonth),
          currentYear: toRaw(data.currentYear),
        }

        return JSBT.encode(raw)
      }
    }
  }
})

ICAL.Event.prototype.toJSBT = function () {
  return { ics: this.toString() }
}

ICAL.Event.fromJSBT = function (data) {
  if (data.__jsbtConstructorName === '_Event') {
    const jevent = ICAL.parse(data.ics)
    const vevent = new ICAL.Component(jevent)
    return new ICAL.Event(vevent)
  }

  throw "not an event!"
}

