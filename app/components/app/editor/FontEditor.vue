<script setup>
import { useCssVar } from '@vueuse/core';
import { computed, defineProps, inject, ref, watchEffect } from 'vue';
import FontFamilyPicker from './FontFamilyPicker.vue';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { FontBoldIcon, FontItalicIcon, FontRomanIcon } from '@radix-icons/vue';
import { Input } from '@/components/ui/input';
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field';
import { Toggle } from '@/components/ui/toggle';

const props = defineProps({
  prefix: {
    type: String,
    required: true
  },
});

const family = useCssVar(`--${props.prefix}_font-family`);
const size   = useCssVar(`--${props.prefix}_font-size`);
const weight = useCssVar(`--${props.prefix}_font-weight`);
const style  = useCssVar(`--${props.prefix}_font-style`);
const color  = useCssVar(`--${props.prefix}_color`);

const previewStyle = computed(() => ({
  fontWeight: weight.value,
  fontStyle: style.value,
  color: color.value,
}));

const selectedFont   = ref(family.value)
const selectedBold   = ref(family.weight === 'bold')
const selectedItalic = ref(family.style === 'italic')
const selectedSize   = ref(parseFloat(size.value))

watchEffect(() => family.value = selectedFont.value.family);
watchEffect(() => weight.value = selectedBold.value ? 'bold' : 'normal');
watchEffect(() => style.value  = selectedItalic.value ? 'italic' : 'normal');
watchEffect(() => size.value   = `${selectedSize.value}pt`);
</script>

<template>
  <div class="flex flex-col space-y-2">
    <div class="flex">
      <FontFamilyPicker v-model:font="selectedFont" :style="previewStyle"/>
    </div>
    <div class="flex flex-row space-x-4">
      <Input type="color" class="w-12 p-1" v-model="color" />
      <Toggle v-model:pressed="selectedBold" class="w-8 p-1">
        <FontBoldIcon />
      </Toggle>
      <Toggle v-model:pressed="selectedItalic" class="w-8 p-1">
        <FontItalicIcon />
      </Toggle>
      <div class="grow">&nbsp;</div>
      <NumberField v-model="selectedSize">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>