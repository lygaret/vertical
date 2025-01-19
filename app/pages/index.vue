<script>
  // calendar store is client-side only
  export const clientOnly = true;
</script>

<script setup>
  import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

  import { BrandBadge } from '@/components/app'
  import { CalendarPreview, ImportICSSidebarGroup, MonthSelectorSidebarGroup } from '@/components/app/calendar'
</script>

<template>
  <div class="w-[12in] h-[18in] hidden print:block m-0 p-0">
    <CalendarPreview />
  </div>
  <SidebarProvider class="print:hidden">
    <SidebarInset>
      <CalendarPreview />
    </SidebarInset>
    <Sidebar side="right" class="print:hidden">
      <SidebarHeader>
        <BrandBadge />
      </SidebarHeader>
      <SidebarContent>
        <MonthSelectorSidebarGroup />
        <ImportICSSidebarGroup />
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
</template>
