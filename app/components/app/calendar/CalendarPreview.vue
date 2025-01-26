<script setup>
  import { useCssModule } from 'vue';

  import { useCalendarStore, monthName, weekdayName } from "@/stores/calendarStore"

  const store = useCalendarStore();
  const style = useCssModule();

  function weekdayClass(date) {
      const day = date.getDay()
      if (day === 0 || day === 6) {
          return style.is_weekend;
      }

      return "";
  }
</script>

<template>
  <div :class="$style.page">
    <h2 :class="$style.year">
      {{ store.currentYear }}
    </h2>
    <h1 :class="$style.month">
      {{ monthName(store.currentMonth) }}
    </h1>
    <div :class="$style.date_grid">
      <div
        v-for="day in store.currentDays"
        :class="[$style.date_row, weekdayClass(day.date)]"
      >
        <div :class="$style.col_date">
          {{ day.date.getDate() }}
        </div>
        <div :class="$style.col_weekday">
          {{ weekdayName(day.date.getDay()) }}
        </div>
        <div :class="$style.col_content">
          <pre>{{ day.events.map(e => e.name).join(", ") }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" global>
  :root {
    --calendar_page_color: #003377;
    --calendar_page_background-color: transparent;
    --calendar_page_font-size: 14pt;
    --calendar_page_padding: 1em 2em;

    --calendar_year_font-family: sans-serif;
    --calendar_year_font-size: 14pt;
    --calendar_year_font-weight: normal;
    --calendar_year_font-style: normal;
    --calendar_year_color: var(--calendar_page_color);
    --calendar_year_text-align: right;
    --calendar_year_margin: 0;     
 
    --calendar_month_font-family: sans-serif;
    --calendar_month_font-size: 24pt;
    --calendar_month_font-weight: normal;
    --calendar_month_font-style: normal;
    --calendar_month_color: var(--calendar_page_color);
    --calendar_month_text-align: right;     
    --calendar_month_margin: 0;     

    --calendar_daygrid_border-color: #ccf;
    --calendar_daygrid_border-width: 5pt;
    --calendar_daygrid_border-radius: 15pt;
    --calendar_daygrid_border-style: solid;

    --calendar_row_color: inherit;
    --calendar_row_background-color: rgba(100, 100, 200, 0.1);

    --calendar_row-weekend_color: inherit;
    --calendar_row-weekend_background-color: rgba(150, 175, 250, 0.3);

    --calendar_day-of-month_color: #535;
    --calendar_day-of-month_font-family: sans-serif;
    --calendar_day-of-month_font-weight: 600;
    --calendar_day-of-month_font-size: 1.0em;

    --calendar_day-of-week_color: #555;
    --calendar_day-of-week_font-family: sans-serif;
    --calendar_day-of-week_font-weight: 300;
    --calendar_day-of-week_font-size: 1.0em;

    --calendar_content_color: #336;
    --calendar_content_font-family: sans-serif;
    --calendar_content_font-weight: 300;
    --calendar_content_font-size: 0.7em;
  }
</style>

<style lang="css" module>
  .page {
    display: flex;
    flex-direction: column;

    height: 100%;
    padding: var(--calendar_page_padding);

    color: var(--calendar_page_color);
    background-color: var(--calendar_page_background-color);

    font-size: var(--calendar_page_font-size);
  }

  @media print {
    @page {
      size: 12in 18in;
    }
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
      font-weight: var(--calendar_day-of-month_font-weight);
      font-size: var(--calendar_day-of-month_font-size);

      text-align: right;
  }

  .date_row > .col_weekday {
      flex: 0 0 6em;
      
      color: var(--calendar_day-of-week_color);
      font-family: var(--calendar_day-of-week_font-family);
      font-weight: var(--calendar_day-of-week_font-weight);
      font-size: var(--calendar_day-of-week_font-size);

      text-align: left;
  }

  .date_row > .col_content {
      flex: 1 1 100%;

      text-align: right;
      padding-right: 1em;

      color: var(--calendar_content_color);
      font-family: var(--calendar_content_font-family);
      font-weight: var(--calendar_content_font-weight);
      font-size: var(--calendar_content_font-size);
  }
</style>
