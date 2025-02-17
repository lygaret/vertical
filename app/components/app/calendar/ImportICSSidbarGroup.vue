<script setup>
import { ref } from 'vue';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar';
import { useCalendarStore } from '@/stores/calendarStore';
import Uploader from '../uploader/Uploader.vue';

const store = useCalendarStore();

async function importFiles(files) {
    for (let file of files) {
        await store.importICSFile(file);
    }
}
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Import ICS</SidebarGroupLabel>
    <Uploader accepts=".ics" multiple @selected="importFiles($event)">
      <ul>
        <li v-for="cal of store.icsCalendars.values()" :key="cal.id" class="flex flex-row justify-between items-center">
          {{ cal.name }}
          <Button size="xs" @click.prevent="store.removeICSFile(cal)">
            Remove
          </Button>
        </li>
      </ul>
    </Uploader>
  </SidebarGroup>
</template>
