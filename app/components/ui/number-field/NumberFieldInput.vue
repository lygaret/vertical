<script setup>
import { cn } from '@/lib/utils';
import { NumberFieldInput } from 'radix-vue';

const props = defineProps({
  class: { type: null, required: false },
  suffix: { type: String, required: false },
});
</script>

<template>
  <div class="transition-colors has-[:disabled]:opacity-50">
    <NumberFieldInput
      data-slot="input"
      :class="
        cn(
          'flex h-9 w-full rounded-sm border border-input bg-transparent py-1 pt-0.5 text-sm text-center shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed ',
          props.class,
       )
      "
    />
    <span v-if="props.suffix" class="absolute right-9 top-1/2 -translate-y-1/2 text-xs text-muted-foreground pointer-events-none">{{props.suffix}}</span>
  </div>
</template>
