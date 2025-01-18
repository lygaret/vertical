import { ref, computed, toRaw } from 'vue';
import { defineStore } from 'pinia';
import { partition, some } from 'lodash-es';
import ICAL from 'ical.js';

export * from './calendarUtil'

const recurrenceIterMax = 100;

function* expandRecurrencesFor(event, calendar, month, year) {
  if (!event.isRecurring())
    return;
  
  const mstart = new Date(year, month, 1)
  const mend   = new Date(year, month + 1, 0)

  const estart = event.startDate.toJSDate();

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
        calendarId: oevent.calendarId,
        recurrenceUid: oevent.uid,
      }
    }

    itercount++;
  }

  if (itercount === recurrenceIterMax)
    console.warn("bailed out of occurrence iterator after", itercount, "iterations, event:", event, "next occurence:", next)
}

let internalUid = 0
function makeInternalUid() {
  internalUid = internalUid + 1
  return `internal-uid-${internalUid}`
}

async function makeCalendarFromICS(file) {
  const content = await file.text()
  const jcal    = ICAL.parse(content)
  const calcomp = new ICAL.Component(jcal)
  const vevents = calcomp.getAllSubcomponents("vevent")
  const mapped  = vevents.map(v => new ICAL.Event(v)).filter(c => c !== null);

  const [exceptions, events] = partition(mapped, e => e.isRecurrenceException())
  return {
    id: file.name,
    name: calcomp.getFirstPropertyValue('x-wr-calname') || file.name,
    events,
    exceptions
  }
}

function makeEventFromICS(event) {
  try {
    let startDate = event.startDate.toJSDate()
    let endDate   = event.endDate.toJSDate()

    // adjust end date, ical does all day events as midnight the next day
    if (event.endDate.isDate && endDate > startDate) {
      endDate = new Date(endDate.getTime() - 1)
    }

    return {
      uid:         event.uid || makeInternalUid(),       
      name:        event.summary,
      startDate,
      endDate,
    }
  }
  catch (e) {
    return null;
  }
}

export const useCalendarStore = defineStore('calendarStore', () => {
  const today = new Date()

  const currentMonth    = ref(today.getMonth())
  const currentYear     = ref(today.getFullYear())
  const currentCacheKey = computed(() => `${currentMonth.value}-${currentYear.value}`)

  const localEvents     = ref(new Set())
  const icsCalendars    = ref(new Set())

  const expandedCache   = new Map()

  const expandedEvents  = computed(() => {
    if (!expandedCache.has(currentCacheKey.value)) {
      const events = new Set()
      for (const calendar of icsCalendars.value) {
        for (const icsEvent of [...calendar.events, ...calendar.exceptions]) {
          const rawICSEvent = toRaw(icsEvent)
          const event       = makeEventFromICS(rawICSEvent)

          events.add({ ...event, calendarId: calendar.id })
          for (const recurrence of expandRecurrencesFor(rawICSEvent, calendar, currentMonth.value, currentYear.value)) {
            events.add(recurrence)
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
    
    for (const event of [...localEvents.value, ...expandedEvents.value]) {
      console.log("getting event: ", event)

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

    expandedCache.clear();
    icsCalendars.value.add(calendar)
  }

  return {
    icsCalendars,
    localEvents,
    currentEvents,
    currentMonth,
    currentYear,
    importICSFile,
  }
})
