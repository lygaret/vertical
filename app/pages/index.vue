<script>
  // calendar store is client-side only
  export const clientOnly = true;
</script>

<script setup>
  import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
  import { useCalendarStore } from '@/stores/calendarStore'

  const store = useCalendarStore()
</script>

<template>
  <SidebarProvider>
    <SidebarInset>
      <pre>{{ JSON.stringify(store.currentEvents, null, 2) }}</pre>
    </SidebarInset>
    <Sidebar side="right">
      <SidebarHeader>
        Header
      </SidebarHeader>
      <SidebarContent>
        Content
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
</template>
