<script>
  // calendar store is client-side only
  export const clientOnly = true;
</script>

<script setup>
  import { cn } from '@/lib/utils';

  import { BrandBadge } from '@/components/app';
  import { CalendarPreview, ImportICSSidebarGroup, MonthSelectorSidebarGroup } from '@/components/app/calendar';
  import FontEditor from '@/components/app/editor/FontEditor.vue';
  import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
</script>

<template>
  <div class="w-[12in] h-[18in] hidden print:block m-0 p-0">
    <CalendarPreview />
  </div>
  <SidebarProvider :class="cn($style.SidebarProvider, 'print:hidden')">
    <SidebarInset>
      <CalendarPreview />
    </SidebarInset>
    <Sidebar
      side="right"
      class="print:hidden"
    >
      <SidebarHeader>
        <BrandBadge />
      </SidebarHeader>
      <SidebarContent>
        <MonthSelectorSidebarGroup />
        <ImportICSSidebarGroup />
        <SidebarGroup>
          <SidebarGroupLabel>Month</SidebarGroupLabel>
          <FontEditor prefix="calendar_month" />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Year</SidebarGroupLabel>
          <FontEditor prefix="calendar_year" />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
</template>

<style module>
.SidebarProvider {
  --sidebar-width: 20rem !important;
}
</style>