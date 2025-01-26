<script setup>
import { ref } from 'vue';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar';
import { useCalendarStore } from '@/stores/calendarStore';

const store = useCalendarStore();

const calFile = ref(null)

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
      <Input
        type="file"
        accepts=".ics"
        @change="readFile($event)"
      />
      <Button
        size="sm"
        @click="importFile()"
      >
        Import
      </Button>
    </div>
  </SidebarGroup>
</template>
