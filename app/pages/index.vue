<script>
  // calendar store is client-side only
  export const clientOnly = true;
</script>

<script setup>
  import { useCalendarStore } from '@/stores/calendarStore'

  const store = useCalendarStore()
</script>

<template>
  <pre>{{ JSON.stringify(store.currentEvents, null, 2) }}</pre>
</template>
