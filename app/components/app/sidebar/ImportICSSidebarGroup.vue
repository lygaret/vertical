<script setup>
import { TrashIcon } from 'lucide-vue-next';

import { Button } from '@/components/ui/button';
import { DropTarget } from '@/components/ui/drop-target';
import { SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar';

import { useCalendarStore } from '@/stores/calendarStore';

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
    <DropTarget multiple accepts=".ics" @selected="importFiles($event)">
      <template v-slot:label>
        drop <code>.ics</code> files, or click to select.
      </template>
      <ul v-if="store.icsCalendars.size > 0" class="mt-3 pt-3 border-t space-y-2">
        <li v-for="cal of store.icsCalendars.values()" :key="cal.id" class="flex flex-row justify-between items-center">
          <small class="truncate">
            {{ cal.name }}
          </small>
          <Button size="icon" variant="ghost" class="text-destructive hover:bg-destructive hover:text-destructive-foreground h-6 w-6" @click.prevent="store.removeICSFile(cal)">
            <TrashIcon class="h-4 w-4" />
          </Button>
        </li>
      </ul>
    </DropTarget>
  </SidebarGroup>
</template>
