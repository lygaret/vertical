<script setup>
  import { computed, useCssModule } from 'vue';
  import { useCalendarStore, monthName, weekdayName } from "@/stores/calendarStore"
  import { cn } from '@/lib/utils';
  import { useCssVariables } from '@/stores/cssVariableStore';
  import LocalEventTrigger from './LocalEventTrigger.vue';
  import CalendarEvent from './CalendarEvent.vue';

  const props = defineProps({
    class: { type: String, default: null, required: false },
    interactive: { type: Boolean, default: false, required: false },
    disabled: { type: Boolean, default: false, required: false },
  });

  const store = useCalendarStore();
  const style = useCssModule();

  const { bindVariable } = useCssVariables()
  const cssPagePatternStyle = bindVariable('--calendar_page_background-pattern');

  function weekdayClass(date) {
      const day = date.getDay()
      if (day === 0 || day === 6) {
          return style.is_weekend;
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
    :class="cn(props.class, $style.page, cssPagePatternClass)"
  >
    <h2 :class="$style.year">
      {{ store.currentYear }}
    </h2>
    <h1 :class="$style.month">
      {{ monthName(store.currentMonth) }}
    </h1>
    <div :class="$style.date_grid">
      <div
        v-for="day in store.currentDays"
        :key="day.date.getDate()"
        :class="[$style.date_row, weekdayClass(day.date)]"
      >
        <div :class="$style.col_date">
          {{ day.date.getDate() }}
        </div>
        <div :class="$style.col_weekday">
          {{ weekdayName(day.date.getDay()) }}
        </div>
        <div :class="$style.col_content">
          <CalendarEvent
            v-for="event in day.events"
            :key="event.id"
            :event="event"
          />
        </div>
        <LocalEventTrigger
          v-if="props.interactive"
          :date="day.date"
        />
      </div>
    </div>
  </div>
</template>

<style lang="css" global>
  :root {
    --calendar_page_color: #003377;
    --calendar_page_background-pattern: solid;
    --calendar_page_background-color-a: #eeeeff;
    --calendar_page_background-color-b: #ccccff;
    --calendar_page_background-size: 16pt;
    --calendar_page_font-size: 14pt;
    --calendar_page_padding: 1em 2em;

    --calendar_year_font-family: sans-serif;
    --calendar_year_font-size: 14pt;
    --calendar_year_font-weight: normal;
    --calendar_year_font-style: normal;
    --calendar_year_color: #9999bb;
    --calendar_year_text-align: right;
    --calendar_year_margin: 0;     
 
    --calendar_month_font-family: sans-serif;
    --calendar_month_font-size: 24pt;
    --calendar_month_font-weight: normal;
    --calendar_month_font-style: normal;
    --calendar_month_color: #666699;
    --calendar_month_text-align: right;     
    --calendar_month_margin: 0;     

    --calendar_daygrid_border-color: #9999ff;
    --calendar_daygrid_border-width: 5pt;
    --calendar_daygrid_border-radius: 15pt;
    --calendar_daygrid_border-style: solid;

    --calendar_row_color: inherit;
    --calendar_row_background-color: #ddddff;

    --calendar_row-weekend_color: inherit;
    --calendar_row-weekend_background-color: #eeeeff;

    --calendar_day-of-month_font-family: sans-serif;
    --calendar_day-of-month_font-size: 14pt;
    --calendar_day-of-month_font-weight: bold;
    --calendar_day-of-month_font-style: noraml;
    --calendar_day-of-month_color: var(--calendar_page_color);

    --calendar_day-of-week_font-family: sans-serif;
    --calendar_day-of-week_font-size: 14pt;
    --calendar_day-of-week_font-weight: normal;
    --calendar_day-of-week_font-style: normal;
    --calendar_day-of-week_color: #666666;

    --calendar_content_font-family: sans-serif;
    --calendar_content_font-size: 16pt;
    --calendar_content_font-weight: normal;
    --calendar_content_font-style: normal;
    --calendar_content_color: var(--calendar_page_color);
  }

  @page {
    size: 12in 18in;
    margin: 0;
  }

  @media print {
    body {
      margin: 0;
      padding: 0;
      width: 12in;
      height: 18in;
      overflow: hidden;
    }

    * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }

  .calendar-page-pattern-radial {
    background-color: var(--calendar_page_background-color-a);
    opacity: 0.8;
    background-image: 
      radial-gradient(circle at center center, var(--calendar_page_background-color-a), var(--calendar_page_background-color-b)),
      repeating-radial-gradient(circle at center center, var(--calendar_page_background-color-a), var(--calendar_page_background-color-b), var(--calendar_page_background-size), transparent calc(var(--calendar_page_background-size) * 2), transparent var(--calendar_page_background-size));
    background-blend-mode: multiply;
  }

  .calendar-page-pattern-zigzag {
    background-color: var(--calendar_page_background-color-a);
    opacity: 0.8;
    background-image:  
      linear-gradient(135deg, var(--calendar_page_background-color-b) 25%, transparent 25%), 
      linear-gradient(225deg, var(--calendar_page_background-color-b) 25%, transparent 25%), 
      linear-gradient(45deg, var(--calendar_page_background-color-b) 25%, transparent 25%), 
      linear-gradient(315deg, var(--calendar_page_background-color-b) 25%, var(--calendar_page_background-color-a) 25%);
    background-position: calc(var(--calendar_page_background-size) / 2) 0, 
                        calc(var(--calendar_page_background-size) / 2) 0, 
                        0 0, 
                        0 0;
    background-size: var(--calendar_page_background-size) var(--calendar_page_background-size);
    background-repeat: repeat;
  }

  .calendar-page-pattern-diagonal {
    background-color: var(--calendar_page_background-color-a);
    opacity: 0.8;
    background: repeating-linear-gradient(
      45deg,
      var(--calendar_page_background-color-b),
      var(--calendar_page_background-color-b) calc(var(--calendar_page_background-size) / 3),
      var(--calendar_page_background-color-a) calc(var(--calendar_page_background-size) / 3),
      var(--calendar_page_background-color-a) var(--calendar_page_background-size)
    );
  }

  .calendar-page-pattern-isometric {
    background-color: var(--calendar_page_background-color-a);
    opacity: 0.8;
    background-image:  
      linear-gradient(30deg, var(--calendar_page_background-color-b) 12%, transparent 12.5%, transparent 87%, var(--calendar_page_background-color-b) 87.5%, var(--calendar_page_background-color-b)), 
      linear-gradient(150deg, var(--calendar_page_background-color-b) 12%, transparent 12.5%, transparent 87%, var(--calendar_page_background-color-b) 87.5%, var(--calendar_page_background-color-b)), 
      linear-gradient(30deg, var(--calendar_page_background-color-b) 12%, transparent 12.5%, transparent 87%, var(--calendar_page_background-color-b) 87.5%, var(--calendar_page_background-color-b)), 
      linear-gradient(150deg, var(--calendar_page_background-color-b) 12%, transparent 12.5%, transparent 87%, var(--calendar_page_background-color-b) 87.5%, var(--calendar_page_background-color-b)), 
      linear-gradient(60deg, color-mix(in srgb, var(--calendar_page_background-color-b) 47%, transparent) 25%, transparent 25.5%, transparent 75%, color-mix(in srgb, var(--calendar_page_background-color-b) 47%, transparent) 75%, color-mix(in srgb, var(--calendar_page_background-color-b) 47%, transparent)), 
      linear-gradient(60deg, color-mix(in srgb, var(--calendar_page_background-color-b) 47%, transparent) 25%, transparent 25.5%, transparent 75%, color-mix(in srgb, var(--calendar_page_background-color-b) 47%, transparent) 75%, color-mix(in srgb, var(--calendar_page_background-color-b) 47%, transparent));
    background-size: calc(var(--calendar_page_background-size) * 1.25) calc(var(--calendar_page_background-size) * 2.19);
    background-position: 0 0, 
                        0 0, 
                        calc(var(--calendar_page_background-size) * 0.625) calc(var(--calendar_page_background-size) * 1.125), 
                        calc(var(--calendar_page_background-size) * 0.625) calc(var(--calendar_page_background-size) * 1.125), 
                        0 0, 
                        calc(var(--calendar_page_background-size) * 0.625) calc(var(--calendar_page_background-size) * 1.125);
  }
</style>

<style lang="css" module>
  .page {
    display: flex;
    flex-direction: column;
    padding: var(--calendar_page_padding);

    color: var(--calendar_page_color);
    background-color: var(--calendar_page_background-color-a);

    font-size: var(--calendar_page_font-size);
  }

  h1, h2 {
    flex: 0;
  }

  h1.month {
    line-height: 1em;
    color: var(--calendar_month_color);
    font-family: var(--calendar_month_font-family);
    font-size: var(--calendar_month_font-size);
    font-weight: var(--calendar_month_font-weight);
    font-style: var(--calendar_month_font-style);
    text-align: var(--calendar_month_text-align);
    margin: var(--calendar_month_margin);
  }

  h2.year {
    line-height: 1em;
    color: var(--calendar_year_color);
    font-family: var(--calendar_year_font-family);
    font-size: var(--calendar_year_font-size);
    font-weight: var(--calendar_year_font-weight);
    font-style: var(--calendar_year_font-style);
    text-align: var(--calendar_year_text-align);
    margin: var(--calendar_year_margin);
  }

  .date_grid {
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 1em;

    border-color: var(--calendar_daygrid_border-color);
    border-width: var(--calendar_daygrid_border-width);
    border-radius: var(--calendar_daygrid_border-radius, 0);
    border-style: var(--calendar_daygrid_border-style, solid);
  }

  .date_row {
    flex: 1;
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;


    border-bottom: 1px solid #ccc;

    padding:    var(--calendar_row_padding);

    color:      var(--calendar_row_color);
    background: var(--calendar_row_background-color);
  }

  .date_row:after {
    position: absolute;
    content: '';

    height: 1px;
    inset: -1px 25% 0 0.5em;

    background: linear-gradient(
        90deg,
        transparent,
        var(--calendar_row_border-color) 10%,
        var(--calendar_row_border-color) 90%,
        transparent
    );
  }

  .date_row.is_weekend {
    background: var(--calendar_row-weekend_background-color);
    color:      var(--calendar_row-weekend_color);
  }

  .date_row:first-of-type {
      border-radius: calc(var(--calendar_daygrid_border-radius, 0) - 5px)
                     calc(var(--calendar_daygrid_border-radius, 0) - 5px)
                     0 0;
      padding-top: 0.3em;
  }

  .date_row:first-of-type:after {
      display: none;
  }

  .date_row:last-of-type {
      border-radius: 0 0
                     calc(var(--calendar_daygrid_border-radius, 0) - 5px)
                     calc(var(--calendar_daygrid_border-radius, 0) - 5px);

      padding-bottom: 0.3em;
  }

  .date_row > .col_date {
      flex: 0 0 2em;
      margin-right: 1em;

      color: var(--calendar_day-of-month_color);
      font-family: var(--calendar_day-of-month_font-family);
      font-size: var(--calendar_day-of-month_font-size);
      font-weight: var(--calendar_day-of-month_font-weight);
      font-style: var(--calendar_day-of-month_font-style);

      text-align: right;
  }

  .date_row > .col_weekday {
      flex: 0 0 6em;
      
      color: var(--calendar_day-of-week_color);
      font-family: var(--calendar_day-of-week_font-family);
      font-weight: var(--calendar_day-of-week_font-weight);
      font-size: var(--calendar_day-of-week_font-size);
      font-style: var(--calendar_day-of-week_font-style);

      text-align: left;
  }

  .date_row > .col_content {
      flex: 1 1 100%;

      display: flex;
      flex-direction: row;
      justify-content: end;

      text-align: right;
      padding-right: 1em;

      color: var(--calendar_content_color);
      font-family: var(--calendar_content_font-family);
      font-weight: var(--calendar_content_font-weight);
      font-size: var(--calendar_content_font-size);
      font-style: var(--calendar_content_font-style);
  }
</style>
