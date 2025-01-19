<script setup>
import { ref } from 'vue';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar';
import { useCalendarStore } from '@/stores/calendarStore';

const store = useCalendarStore();

const calFile = ref(null)
const calName = ref(null)
const calColor = ref(null)

async function readFile(event) {
  calFile.value = event.currentTarget.files[0];
}

async function importFile() {
    if (calFile.value == null)
        throw "no file selected";
    
  await store.importICSFile(calFile.value);
}
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Import ICS</SidebarGroupLabel>
    <div class="flex flex-col space-y-2 items-end">
      <Input type="file" accepts=".ics" @change="readFile($event)" />
      <Button size="sm" @click="importFile()">Import</Button>
    </div>
    <div class="flex flex-row">
      <div v-for="[id, calendar] of store.icsCalendars">
        {{ calendar.name }}
      </div>
    </div>
  </SidebarGroup>
</template>
