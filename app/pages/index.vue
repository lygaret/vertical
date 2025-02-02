<script>
  // calendar store is client-side only
  export const clientOnly = true;
</script>

<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import { cn } from '@/lib/utils';

  import { useCssVariables } from '@/stores/cssVariableStore';

  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
  import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

  import { BrandBadge } from '@/components/app';
  import { CalendarPage, ImportICSSidebarGroup, MonthSelectorSidebarGroup } from '@/components/app/calendar';
  import { FontEditor } from '@/components/app/editor';
import { Button } from '@/components/ui/button';

  const cssVariablesStore = useCssVariables();
  const { bindVariable } = cssVariablesStore;

  const isPrinting = ref(true);
  function beforePrint() {
    isPrinting.value = true;
  }
  function afterPrint() {
    isPrinting.value = false;
  }
  onMounted(() => {
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);
  })
  onUnmounted(() => {
    window.removeEventListener('beforeprint', beforePrint);
    window.removeEventListener('afterprint', afterPrint);
  });

  const cssPagePatternOptions = [
    { value: "solid", label: "Solid" },
    { value: "radial", label: "Radial" },
    { value: "zigzag", label: "Zig Zag" },
    { value: "diagonal", label: "Diagonal" },
    { value: "isometric", label: "Isometric" },
  ];

  const cssPagePattern = bindVariable('--calendar_page_background-pattern');

  const cssPageColorA = bindVariable('--calendar_page_background-color-a');
  const cssPageColorB = bindVariable('--calendar_page_background-color-b');
  const cssPagePatternSize = bindVariable(
    '--calendar_page_background-size',
    (value) => `${value}pt`,
    (value) => parseFloat(value)
  );
</script>

<template>
  <div class="hidden print:block m-0 p-0">
    <CalendarPage :disabled="!isPrinting" class="h-[18in] w-[12in]" />
  </div>
  <SidebarProvider :class="cn($style.SidebarProvider, 'print:hidden')">
    <SidebarInset :class="cn($style.SidebarInset)">
      <CalendarPage interactive class="h=[18in] min-h-[18in] w-full" />
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
        <hr>
        <SidebarGroup>
          <Button @click="cssVariablesStore.clearStore()">Reset Theme</Button>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Page</SidebarGroupLabel>
          <Label>
            Pattern
            <Select v-model="cssPagePattern">
              <SelectTrigger class="text-xs basis-[25%] grow-0 shadow-none border-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="pattern of cssPagePatternOptions"
                    :key="pattern.value"
                    :value="pattern.value"
                  >
                    {{ pattern.label }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Label>
          <Label>
            Background <small>Primary</small>
            <Input
              v-model="cssPageColorA"
              type="color"
            />
          </Label>
          <Label>
            Background <small>Secondary</small>
            <Input
              v-model="cssPageColorB"
              type="color"
            />
          </Label>
          <Input
            v-model="cssPagePatternSize"
            type="range"
            min="1"
            max="100"
            step="1"
          />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Year</SidebarGroupLabel>
          <FontEditor prefix="calendar_year" />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Month</SidebarGroupLabel>
          <FontEditor prefix="calendar_month" />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Day of Month</SidebarGroupLabel>
          <FontEditor prefix="calendar_day-of-month" />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Day of Week</SidebarGroupLabel>
          <FontEditor prefix="calendar_day-of-week" />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Highlighted Events</SidebarGroupLabel>
          <FontEditor prefix="calendar_content-highlight" />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Event Content</SidebarGroupLabel>
          <FontEditor prefix="calendar_content" />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
</template>

<style module>
.SidebarProvider {
  --sidebar-width: 20rem !important;
}

.SidebarInset {
    height: 100svh;
    overflow: auto;
}
</style>
