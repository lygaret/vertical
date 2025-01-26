<script setup>
import { InfoCircledIcon } from '@radix-icons/vue';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useSettingsStore } from '@/stores/settingsStore';

const settings = useSettingsStore();
</script>

<template>
  <Label class="flex items-center w-full p-4 space-x-2 no-select">
    <span>Allow Google Fonts?</span>
    <Checkbox v-model:checked="settings.allowGoogle" />
    <span class="grow no-select">&nbsp;</span>
    <Tooltip>
      <TooltipTrigger>
        <InfoCircledIcon class="self-end" />
      </TooltipTrigger>
      <TooltipContent>
        <p>
          Google Fonts are a collection of free and open-source fonts hosted by Google.
        </p>
        <p>
          Enabling this option will allow you to use these fonts in your calendar, 
          but may also expose your browser to some tracking.
        </p>
      </TooltipContent>
    </Tooltip>
  </Label>
</template>