<script setup>
  import { computed } from 'vue';
  import { cn } from '@/lib/utils';

  import { useCalendarStore, monthName, weekdayName } from "@/stores/calendarStore"
  import { useCssVariables } from '@/stores/cssVariableStore';

  import LocalEventTrigger from './LocalEventTrigger.vue';
  import CalendarEvent from './CalendarEvent.vue';
  import CalendarStyle from './CalendarStyle.module.css';

  const { bindVariable } = useCssVariables()
  const store = useCalendarStore();

  const props = defineProps({
    class: { type: String, default: null, required: false },
    interactive: { type: Boolean, default: false, required: false },
    disabled: { type: Boolean, default: false, required: false },
  });

  const cssPagePatternStyle = bindVariable('--calendar_page_background-pattern');
  const cssPagePatternClass = computed(() => {
    const key = `calendar-page-pattern-${cssPagePatternStyle.value}`;
    return CalendarStyle[key]
  });

  function isWeekend(date) {
    const day = date.getDay()
    return (day === 0 || day === 6)
  }
</script>

<template>
  <div
    v-if="!props.disabled"
    :class="cn(props.class, CalendarStyle.page, cssPagePatternClass)"
  >
    <h2 :class="CalendarStyle.year">
      {{ store.currentYear }}
    </h2>
    <h1 :class="CalendarStyle.month">
      {{ monthName(store.currentMonth) }}
    </h1>
    <div :class="CalendarStyle.date_grid">
      <div
        v-for="day in store.currentDays"
        :key="day.date.toISOString()"
        :class="cn(CalendarStyle.date_row, isWeekend(day.date) && CalendarStyle.is_weekend)"
      >
        <div :class="CalendarStyle.col_date">
          {{ day.date.getDate() }}
        </div>
        <div :class="CalendarStyle.col_weekday">
          {{ weekdayName(day.date.getDay()) }}
        </div>
        <div :class="CalendarStyle.col_content">
          <CalendarEvent
            v-for="event in day.events"
            :key="event.id"
            :event="event"
            :interactive="interactive"
          />
          <span :class="CalendarStyle.col_content_separator" />
        </div>
        <LocalEventTrigger
          v-if="props.interactive"
          :date="day.date"
        />
      </div>
    </div>
  </div>
</template>
