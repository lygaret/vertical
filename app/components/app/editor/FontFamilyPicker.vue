<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useState } from '/:hooks.js';

import { ListboxContent, ListboxFilter, ListboxItem, ListboxRoot, ListboxVirtualizer } from 'radix-vue';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useSettingsStore } from '@/stores/settingsStore';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MagnifyingGlassIcon } from '@radix-icons/vue';

import FontGoogleConsent from './FontGoogleConsent.vue';
import FontFamilyPreview from './FontFamilyPreview.vue';

const settings = useSettingsStore();
const { googleFonts } = useState();

const props = defineProps({
  style: { type: Object, required: false, default: null },
});

const selectedFont = defineModel('font', { type: Object, default: null });

const allowedFonts = computed(() => {
  const google = settings.allowGoogle ? googleFonts : [];
  return [
    { family: 'sans-serif', category: 'local' },
    { family: 'serif', category: 'local' },
    { family: 'cursive', category: 'local' },
    { family: 'monospace', category: 'local' },
    ...google,
  ];
});

const categories = computed(() => new Set(allowedFonts.value.map((font) => font.category)))

const searchTerm = ref('');
const searchCategory = ref(null);

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

const open = ref(false);

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
  if (typeof selectedFont.value === 'string') {
    selectedFont.value = allowedFonts.value.find((font) => font.family === selectedFont.value);
    if (selectedFont.value == null) {
      selectedFont.value = allowedFonts.value[0];
      console.warn(`Font ${selectedFont.value} not found in allowed fonts`);
    }

    return
  }

  if (selectedFont.value) {
    loadFullFont(selectedFont.value)

    open.value = false
    searchTerm.value = ""
  }
})
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
      <ListboxRoot v-model="selectedFont">
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
                  v-for="category of categories"
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
              :value="option"
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