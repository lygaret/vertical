import { ref, computed, toRaw } from 'vue';
import { defineStore } from 'pinia';
import { partition, some } from 'lodash-es';
import ICAL from 'ical.js';

export * from './calendarUtil'

const recurrenceIterMax = 100;

function* monthCoverageRange(month, year, calendar, eventProxy) {
  const mstart = new Date(year, month, 1)
  const mend   = new Date(year, month + 1, 0)

  function* yieldDayRange(start, end) {
    const startDay = start < mstart ? 1 : start.getDate()
    const endDay   = end > mend     ? mend.getDate() : end.getDate()

    for (let day = startDay; day <= endDay; day++) {
      yield day;
    }
  }

  const event = toRaw(eventProxy)
  const estart = event.startDate.toJSDate();
  const eend   = event.endDate.toJSDate();

  // simple if not a recurrence
  if (!event.isRecurring()) {

    if (eend < mstart || estart > mend) {
      return
    }

    yield* yieldDayRange(estart, eend);
    return
  }
  
  // complicated if it is a recurrance
  const iterator   = event.iterator();
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

  do {
    next = iterator.next();
    if (next) {
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
        yield* yieldDayRange(ostart, oend)
      }
    }

    itercount++;
  } while (next && itercount < recurrenceIterMax)

  if (itercount === recurrenceIterMax)
    console.warn("bailed out of occurrence iterator after", itercount, "iterations, event:", event, "next occurence:", next)
}

export const useCalendarStore = defineStore('calendarStore', () => {
  const today = new Date()

  const calendars = ref([])
  const errors = ref([])

  const currentMonth  = ref(today.getMonth())
  const currentYear   = ref(today.getFullYear())

  const currentEvents = computed(() => {
    const eventsByDay = new Map();

    for (const calendar of calendars.value) {
      for (const event of [
        ...calendar.events,
        ...calendar.exceptions
      ]) {
        const rawEvent = toRaw(event);
        const mapped = {
          uid:         rawEvent.uid,       
          name:        rawEvent.summary,
          description: rawEvent.description,
          startDate:   rawEvent.startDate.toJSDate(),
          endDate:     rawEvent.endDate.toJSDate(),
        }

        for (const day of monthCoverageRange(currentMonth.value, currentYear.value, calendar, event)) {
          if (!eventsByDay.has(day)) {
            eventsByDay.set(day, [])
          }

          eventsByDay.get(day).push(mapped);
        }
      }
    }

    return Object.fromEntries(eventsByDay)
  });

  function readICSBuffer(filename, content) {
    const jcal = ICAL.parse(content)
    const comp = new ICAL.Component(jcal)

    const makeEvent = (vevent) => {
      const event = new ICAL.Event(vevent)

      try {
        const startDate = event.startDate.toJSDate();
        const endDate   = event.endDate.toJSDate();

        // adjust end of day for all day events
        if (event.endDate.isDate && endDate > startDate) {
          const newEndDate = new Date(endDate.getTime() - 1)
          event.endDate    = ICAL.Time.fromJSDate(newEndDate)
        }

        return event;
      }
      catch (e) {
        return null;
      }
    }

    const comps                = comp.getAllSubcomponents("vevent").map(makeEvent);
    const withValidDates       = comps.filter(c => c !== null)
    const [exceptions, events] = partition(withValidDates, e => e.isRecurrenceException())

    return {
      filename,
      name:        comp.getFirstPropertyValue('x-wr-calname') || filename,
      description: comp.getFirstPropertyValue('x-wr-caldesc') || null,

      events,
      exceptions
    }
  }

  function readICSFile(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error("no file selected"))
        return
      }

      const reader = new FileReader();
      reader.onerror = reject
      reader.onload = (e) => {
        try {
          const content = e.target.result;
          const result  = readICSBuffer(file.name, content);

          calendars.value.push(result)
          resolve(result)
        }
        catch (e) {
          reject(e)
        }
      };

      reader.readAsText(file)
    });
  }

  return {
    calendars,
    errors,

    currentMonth,
    currentYear,
    currentEvents,

    readICSBuffer,
    readICSFile,
  }
})
