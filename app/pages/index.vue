<script>
  // calendar store is client-side only
  export const clientOnly = true;
</script>

<script setup>
  import { useState } from '/:hooks.js'
  import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

  import { BrandBadge } from '@/components/app'
  import { CalendarPreview, ImportICSSidebarGroup, MonthSelectorSidebarGroup } from '@/components/app/calendar'

  import FontPicker from '@/components/app/editor/FontFamilyPicker.vue'
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Icon } from 'lucide-vue-next';
import { ColorWheelIcon, FontBoldIcon, FontItalicIcon, FontRomanIcon, FontStyleIcon } from '@radix-icons/vue';
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useCssVariables } from '@/stores/cssVariableStore';
import { onMounted, onUnmounted, provide, ref, useTemplateRef } from 'vue';
import FontEditor from '@/components/app/editor/FontEditor.vue';

  const { googleFonts } = useState()

  const calendarEl = useTemplateRef('calendar')
  provide('calendarEl', calendarEl)
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