<script setup>
import { cn } from '@/lib/utils';
import { useVModel } from '@vueuse/core';

const props = defineProps({
  defaultValue: { type: [String, Number], required: false },
  modelValue: { type: [String, Number], required: false },
  class: { type: null, required: false },
  showBorder: { type: Boolean, required: false, default: true },
  showFocusRing: { type: Boolean, required: false, default: true },
});

const emits = defineEmits(['update:modelValue']);

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex h-9 w-full rounded-sm bg-transparent px-3 py-1 text-sm shadow-sm transition-colors',
        props.showBorder && 'border border-input',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'placeholder:text-muted-foreground',
        props.showFocusRing && 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        !props.showFocusRing && 'focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
</template>
