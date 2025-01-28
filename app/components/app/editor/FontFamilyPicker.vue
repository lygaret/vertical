<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useState } from '/:hooks.js';

import { ListboxContent, ListboxFilter, ListboxItem, ListboxRoot, ListboxVirtualizer } from 'radix-vue';
import { MagnifyingGlassIcon } from '@radix-icons/vue';

import { cn } from '@/lib/utils';
import { useSettingsStore } from '@/stores/settingsStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import FontGoogleConsent from './FontGoogleConsent.vue';
import FontFamilyPreview from './FontFamilyPreview.vue';

const settings = useSettingsStore();
const props    = defineProps({
  style: { type: Object, required: false, default: null },
});

const { googleFonts } = useState();
const allowedFonts = computed(() => {
  return [
    { family: 'sans-serif', category: 'local' },
    { family: 'serif', category: 'local' },
    { family: 'cursive', category: 'local' },
    { family: 'monospace', category: 'local' },
    ...(settings.allowGoogle ? googleFonts : []),
  ];
});

const open = ref(false);

const searchTerm = ref('');
const searchCategory = ref(null);
const searchCategories = computed(() => new Set(allowedFonts.value.map((font) => font.category)))

const filteredFonts = computed(() => {
  let searchFonts = allowedFonts.value;
  if (searchCategory.value !== null) 
    searchFonts = searchFonts.filter((font) => font.category === searchCategory.value)

  return searchTerm.value === ''
    ? searchFonts
    : searchFonts.filter((font) =>
        font.family.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
});

const selectedFamily = defineModel({ type: String, default: null });
const selectedFont   = computed(() => {
  if (selectedFamily.value == null)
    return null;

  const selected = allowedFonts.value.find((font) => font.family === selectedFamily.value);
  if (selected == null) {
    console.warn('selected font not found', selectedFamily.value);
    return allowedFonts.value[0];
  }

  return selected
})

function loadFullFont(font) {
  if (font == null || font.category === 'local') 
    return;

  const linkId = `google-font-${font.family}`;
  if (document.getElementById(linkId)) 
    return;

  const link = document.createElement("link");
  const family = font.family.replace(" ", "+");

  link.id = linkId;
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${family}&display=swap`;
  document.head.appendChild(link);
}

// Watch for changes in selection to load full fonts
watchEffect(() => {
  if (selectedFont.value)
    loadFullFont(selectedFont.value)

  open.value = false
  searchTerm.value = ""
});
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button 
        variant="outline"
        :aria-expanded="open" 
        role="combobox" 
        class="font-inherit weight-inherit style-inherit grow justify-between"
      >
        <FontFamilyPreview
          v-if="selectedFont"
          :font="selectedFont"
          :style="props.style"
        />
        <span v-else>Pick Font</span>
        <MagnifyingGlassIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent
      :class="cn($style.PopoverContent, 'p-0')"
      side="bottom"
      :side-offset="0"
    >
      <ListboxRoot v-model="selectedFamily">
        <ListboxFilter
          as="div"
          class="w-full flex items-center justify-between rounded-sm focus-within:outline-none focus-within:ring-1 focus-within:ring-ring"
        >
          <Input
            v-model="searchTerm"
            placeholder="Search fonts..."
            class="grow"
            :show-border="false"
            :show-focus-ring="false"
          />
          <Select v-model="searchCategory">
            <SelectTrigger class="text-xs basis-[25%] grow-0 shadow-none border-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem :value="null">
                  All
                </SelectItem>
                <SelectItem
                  v-for="category of searchCategories"
                  :key="category"
                  :value="category"
                >
                  {{ category }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </ListboxFilter>
        <ListboxContent :class="cn($style.ListboxContent, 'overflow-y-auto overflow-x-hidden')">
          <FontGoogleConsent class="bg-muted b-primary bb-1" />
          <ListboxVirtualizer
            v-slot="{ option }"
            :options="filteredFonts"
            :estimate-size="40"
            :text-content="(opt) => opt.family"
            class="max-h-[480px]"
          >
            <ListboxItem
              :key="option.family"
              :value="option.family"
              class="w-full relative flex cursor-default select-none items-center rounded-sm px-4 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              <FontFamilyPreview :font="option" />
            </ListboxItem>
          </ListboxVirtualizer>
        </ListboxContent>
      </ListboxRoot>
    </PopoverContent>
  </Popover>
</template>

<style module>
.PopoverContent {
  /* cover the trigger 
  position: relative;
  top: calc(0px - var(--radix-popover-trigger-height));

  /* make the popover the same size as the trigger */
  width:      var(--radix-popover-trigger-width);
  max-height: var(--radix-popover-content-available-height);
}

.ListboxContent {
  /* don't let the listbox take up the entire screen */
  max-height: min(480px, var(--radix-popover-content-available-height));
}
</style>