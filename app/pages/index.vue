<script>
  // calendar store is client-side only
  export const clientOnly = true;
</script>

<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import { cn } from '@/lib/utils';

  import { useCalendarStore } from '@/stores/calendarStore';
  import { useCssVariables } from '@/stores/cssVariableStore';

  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
  import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

  import { BrandBadge } from '@/components/app';
  import { CalendarPage, ImportICSSidebarGroup, MonthSelectorSidebarGroup } from '@/components/app/calendar';
  import { PagePatternOptions } from '@/components/app/calendar/styles';
  import { FontEditor } from '@/components/app/editor';
  import { Checkbox } from '@/components/ui/checkbox';

  const calendarStore = useCalendarStore();
  const cssVariablesStore = useCssVariables();

  const { bindVariable, bindVariableFloat } = cssVariablesStore;

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

  const cssPagePattern = bindVariable('--calendar_page_background-pattern');
  const cssPageColorA = bindVariable('--calendar_page_background-color-a');
  const cssPageColorB = bindVariable('--calendar_page_background-color-b');
  const cssPageColorC = bindVariable('--calendar_page_background-color-c');
  const cssPagePatternSize = bindVariableFloat('--calendar_page_background-size', 'pt')

  const cssPagePaddingTop = bindVariableFloat('--calendar_page_padding-top', 'pt')
  const cssPagePaddingBottom = bindVariableFloat('--calendar_page_padding-bottom', 'pt')
  const cssPagePaddingRight = bindVariableFloat('--calendar_page_padding-right', 'pt')
  const cssPagePaddingLeft = bindVariableFloat('--calendar_page_padding-left', 'pt')

  const cssDaygridBorderColor  = bindVariable('--calendar_daygrid_border-color');
  const cssDaygridBorderWidth  = bindVariableFloat('--calendar_daygrid_border-width', 'pt');
  const cssDaygridBorderRadius = bindVariableFloat('--calendar_daygrid_border-radius', 'pt');
  const cssDaygridRowBackground = bindVariable('--calendar_row_background-color');
  const cssDaygridWeekendBackground = bindVariable('--calendar_row-weekend_background-color');

  const cssDayMonthVisible = bindVariable(
    '--calendar_day-of-month_display',
    (value) => value ? 'inline' : 'none',
    (value) => value !== 'none'
  )
  const cssDayWeekVisible = bindVariable(
    '--calendar_day-of-week_display',
    (value) => value ? 'inline' : 'none',
    (value) => value !== 'none'
  )

</script>

<template>
  <div class="hidden print:block m-0 p-0">
    <CalendarPage
      :disabled="!isPrinting"
      class="h-[18in] w-[12in]"
    />
  </div>
  <SidebarProvider :class="cn($style.SidebarProvider, 'print:hidden')">
    <SidebarInset :class="cn($style.SidebarInset)">
      <CalendarPage
        interactive
        class="h=[18in] min-h-[18in] max-w-[12in] w-full mx-auto shadow-lg"
      />
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
          <Button @click="cssVariablesStore.clearStore()">
            Reset Theme
          </Button>
          <Button
            variant="destructive"
            @click="calendarStore.resetStore(true)"
          >
            Reset Calendar
          </Button>
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
                    v-for="pattern of PagePatternOptions"
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
          <Label>
            Background <small>Tertiary</small>
            <Input
              v-model="cssPageColorC"
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
          <Label>
            Page Padding (Top/Right/Bottom/Left)
            <Input
              v-model="cssPagePaddingTop"
              class="w-full"
              type="range"
              min="1"
              max="96"
            />
            <Input
              v-model="cssPagePaddingRight"
              class="w-full"
              type="range"
              min="1"
              max="96"
            />
            <Input
              v-model="cssPagePaddingBottom"
              class="w-full"
              type="range"
              min="1"
              max="96"
            />
            <Input
              v-model="cssPagePaddingLeft"
              class="w-full"
              type="range"
              min="1"
              max="96"
            />
          </Label>
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
          <SidebarGroupLabel>Day Grid</SidebarGroupLabel>
          <Label>
            Day Background
            <Input
              v-model="cssDaygridRowBackground"
              type="color"
            />
          </Label>
          <Label>
            Weekend Background
            <Input
              v-model="cssDaygridWeekendBackground"
              type="color"
            />
          </Label>
          <Label>
            Border Color
            <Input
              v-model="cssDaygridBorderColor"
              type="color"
            />
          </Label>
          <Label>
            Border Width
            <Input
              v-model="cssDaygridBorderWidth"
              type="range"
              min="0"
              max="25"
            />
          </Label>
          <Label>
            Border Radius
            <Input
              v-model="cssDaygridBorderRadius"
              type="range"
              min="0"
              max="25"
            />
          </Label>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Day of Month</SidebarGroupLabel>
          <Checkbox v-model:checked="cssDayMonthVisible" />
          <FontEditor prefix="calendar_day-of-month" />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Day of Week</SidebarGroupLabel>
          <Checkbox v-model:checked="cssDayWeekVisible" />
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

    background: linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(0, 0, 0, 0.0980392) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(0, 0, 0, 0.0980392) 0), white;
    background-repeat: repeat, repeat;
    background-position: 0px 0, 10px 10px;
    transform-origin: 0 0 0;
    background-origin: padding-box, padding-box;
    background-clip: border-box, border-box;
    background-size: 20px 20px, 20px 20px;
    box-shadow: none;
    text-shadow: none;
    transition: none;
    transform: scaleX(1) scaleY(1) scaleZ(1);
}
</style>
