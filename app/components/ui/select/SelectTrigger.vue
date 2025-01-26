<script setup>
import { cn } from '@/lib/utils';
import { CaretSortIcon } from '@radix-icons/vue';
import { SelectIcon, SelectTrigger, useForwardProps } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
  disabled: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
  showBorder: { type: Boolean, required: false, default: true },
  showFocusRing: { type: Boolean, required: false, default: true },
});

const delegatedProps = computed(() => {
  const { 
    class: _, 
    showBorder: __,
    showFocusRing: ___,
    ...delegated 
  } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-sm bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start',
        props.showBorder && 'border border-input',
        props.showFocusRing && 'focus:outline-none focus:ring-1 focus:ring-ring',
        !props.showFocusRing && 'focus:outline-none',
        props.class,
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <CaretSortIcon class="w-4 h-4 opacity-50 shrink-0" />
    </SelectIcon>
  </SelectTrigger>
</template>
