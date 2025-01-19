<script setup>
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar';

import { MonthOptions, YearOptions } from '@/stores/calendarUtil';
import { useCalendarStore } from '@/stores/calendarStore';

const store = useCalendarStore();
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Select Calendar</SidebarGroupLabel>
    <div class="flex flex-row space-x-3">
      <Select
        :modelValue="String(store.currentMonth)"
        @update:model-value="store.currentMonth = parseInt($event)"
      > 
        <SelectTrigger>
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="month_opt in MonthOptions" :value="String(month_opt.value)">
              {{ month_opt.label }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        :modelValue="String(store.currentYear)"
        @update:model-value="store.currentYear = parseInt($event)"
      > 
        <SelectTrigger>
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="year_opt in YearOptions" :value="String(year_opt.value)">
              {{ year_opt.label }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </SidebarGroup>
</template>
