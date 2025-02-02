<script setup>
  import { computed, useCssModule } from 'vue';
  import { useCalendarStore, monthName, weekdayName } from "@/stores/calendarStore"
  import { cn } from '@/lib/utils';
  import { useCssVariables } from '@/stores/cssVariableStore';
  import LocalEventTrigger from './LocalEventTrigger.vue';
  import CalendarEvent from './CalendarEvent.vue';
  import CalendarStyle from './CalendarStyle.module.css';

  const props = defineProps({
    class: { type: String, default: null, required: false },
    interactive: { type: Boolean, default: false, required: false },
    disabled: { type: Boolean, default: false, required: false },
  });

  const store = useCalendarStore();

  const { bindVariable } = useCssVariables()
  const cssPagePatternStyle = bindVariable('--calendar_page_background-pattern');

  function weekdayClass(date) {
      const day = date.getDay()
      if (day === 0 || day === 6) {
          return CalendarStyle.is_weekend;
      }

      return "";
  }

  const cssPagePatternClass = computed(() => {
    return `calendar-page-pattern-${cssPagePatternStyle.value}`;
  });
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
        :key="day.date.getDate()"
        :class="[CalendarStyle.date_row, weekdayClass(day.date)]"
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
          />
          <span :class="CalendarStyle.col_content_separator"></span>
        </div>
        <LocalEventTrigger
          v-if="props.interactive"
          :date="day.date"
        />
      </div>
    </div>
  </div>
</template>
