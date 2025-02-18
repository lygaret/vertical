<script setup>
  import { ref } from 'vue';
  import { cn } from '@/lib/utils';

  import { useCalendarStore } from '@/stores/calendarStore';
  import { useCssVariables } from '@/stores/cssVariableStore';

  import { BugIcon } from 'lucide-vue-next';
  import { Button } from '@/components/ui/button';
  import { SidebarGroup } from '@/components/ui/sidebar';

  const calendarStore = useCalendarStore();
  const cssVariablesStore = useCssVariables();

  const showDanger = ref(false)
</script>

<template>
  <SidebarGroup :class="cn('text-xs shadow-sm border-t transition-all', showDanger ? 'bg-warning_muted text-warning_muted-fg border-t-warning' : '')">
    <div class="flex flex-row justify-between items-center">
      <Button size="icon" variant="ghost" :class="cn('text-destructive', showDanger ? 'bg-destructive text-destructive-foreground' : '')" @click="showDanger = !showDanger">
        <BugIcon size="12px" />
      </Button>
      <div class="flex flex-col space-y-2 items-end my-1">
        <a class="text-right inline" target="_blank" rel="noopener noreferrer" href="https://github.com/lygaret/vertical">
          <span class="sr-only">Github Repo</span>
          <img class="inline mr-1" src="https://img.shields.io/static/v1?label=lygaret&message=vertical&color=blue&logo=github" referrerpolicy="no-referrer" alt="github repo badge" />
          <img class="inline" src="https://img.shields.io/github/last-commit/lygaret/vertical.svg" referrerpolicy="no-referrer" alt="github commit badge" />
        </a>
        <small>✌️ ❤️ &nbsp;🌮 from east boulder county</small>
      </div>
    </div>
    <div v-if="showDanger" class="flex flex-row justify-end space-x-2 my-1 border-t border-t-warning pt-2">
      <strong class="text-destructive self-center align-start mr-auto">debug:</strong>
      <Button size="xs" variant="destructive" @click="cssVariablesStore.clearStore()">Reset Theme</Button>
      <Button size="xs" variant="destructive" @click="calendarStore.resetStore(true)">Reset Calendar</Button>
    </div>
  </SidebarGroup>
</template>
