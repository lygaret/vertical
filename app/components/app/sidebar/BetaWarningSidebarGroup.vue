<script setup>
  import { useCalendarStore } from '@/stores/calendarStore';
  import { useCssVariables } from '@/stores/cssVariableStore';

  import { Button } from '@/components/ui/button';
  import { SidebarGroup } from '@/components/ui/sidebar';

  const calendarStore = useCalendarStore();
  const cssVariablesStore = useCssVariables();
</script>

<template>
  <SidebarGroup class="text-xs bg-warning_muted text-warning_muted-fg shadow-sm border-t border-t-warning">
    <div class="flex flex-col space-y-1 items-end my-1">
      <a class="text-right" target="_blank" rel="noopener noreferrer" href="https://github.com/lygaret/vertical">
        <span class="sr-only">Github Repo</span>
        <img src="https://img.shields.io/static/v1?label=lygaret&message=vertical&color=blue&logo=github" referrerpolicy="no-referrer" alt="github repo badge" />
      </a>
      <a class="text-right" target="_blank" rel="noopener noreferrer" href="https://github.com/lygaret/vertical">
        <span class="sr-only">Github Latest Commit</span>
        <img src="https://img.shields.io/github/last-commit/lygaret/vertical.svg" referrerpolicy="no-referrer" alt="github commit badge" />
      </a>
      <span>✌️ ❤️ &nbsp;🌮 from east boulder county</span>
    </div>
    <div class="flex flex-row justify-end space-x-2 mt-1 border-t border-t-warning pt-2">
      <strong class="text-destructive self-center align-start mr-auto">debug:</strong>
      <Button size="xs" variant="destructive" @click="cssVariablesStore.clearStore()">Reset Theme</Button>
      <Button size="xs" variant="destructive" @click="calendarStore.resetStore(true)">Reset Calendar</Button>
    </div>
  </SidebarGroup>
</template>
