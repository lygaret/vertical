<script setup>
  import { ref } from 'vue'
  import { MonthOptions, YearOptions, useCalendarStore } from '../stores/calendarStore'

  const store  = useCalendarStore()

  const textInput  = ref("")
  const textOutput = ref("")

  const fileInput  = ref(null)
  const fileOutput = ref(null)

  async function handleFileRead() {
      if (fileInput.value) {
          fileOutput.value = await store.readICSFile(fileInput.value)
      }
  }
</script>

<template>
  <select v-model.number="store.currentMonth">
    <option v-for="month in MonthOptions" :value="month.value">
      {{ month.label }}
    </option>
  </select>
  <select v-model.number="store.currentYear">
    <option v-for="year in YearOptions" :value="year.value">
      {{ year.label }}
    </option>
  </select>
  <hr>
  <button @click="handleFileRead()">
    Read
  </button>
  <input type="file" accept=".ics" @change="fileInput = $event.target.files[0]"/>
  <hr>
  <pre v-if="fileOutput">{{ JSON.stringify(store.currentEvents, null, 2) }}</pre>
</template>
