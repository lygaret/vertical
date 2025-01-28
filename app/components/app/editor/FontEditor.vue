<script setup>
import { computed, defineProps } from 'vue';
import { FontBoldIcon, FontItalicIcon } from '@radix-icons/vue';

import { useCssVariables } from '@/stores/cssVariableStore';
import { Input } from '@/components/ui/input';
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field';
import { Toggle } from '@/components/ui/toggle';

import FontFamilyPicker from './FontFamilyPicker.vue';

const props = defineProps({
  prefix: {
    type: String,
    required: true
  },
});

const { bindVariable } = useCssVariables();

const fontFamily = bindVariable( `--${props.prefix}_font-family`);
const fontColor  = bindVariable(`--${props.prefix}_color`);

const fontSize   = bindVariable(
  `--${props.prefix}_font-size`,
  (value) => `${value}pt`,
  (value) => parseFloat(value)
);

const fontWeight = bindVariable(
  `--${props.prefix}_font-weight`,
  (value) => value ? 'bold' : 'normal',
  (value) => value === 'bold'
);

const fontStyle = bindVariable(
  `--${props.prefix}_font-style`,
  (value) => value ? 'italic' : 'normal',
  (value) => value === 'italic'
);

const previewStyle = computed(() => ({ 
  fontWeight: `var(${fontWeight.cssProperty})`, 
  fontStyle:  `var(${fontStyle.cssProperty})`, 
  color:      `var(${fontColor.cssProperty})`,
}));
</script>

<template>
  <div class="flex flex-col space-y-2">
    <div class="flex">
      <FontFamilyPicker
        v-model="fontFamily"
        :style="previewStyle"
      />
    </div>
    <div class="flex flex-row space-x-4">
      <Input
        v-model="fontColor"
        type="color"
        class="w-12 p-1"
      />
      <Toggle
        v-model:pressed="fontWeight"
        class="w-8 p-1"
      >
        <FontBoldIcon />
      </Toggle>
      <Toggle
        v-model:pressed="fontStyle"
        class="w-8 p-1"
      >
        <FontItalicIcon />
      </Toggle>
      <div class="grow">
&nbsp;
      </div>
      <NumberField v-model="fontSize">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput suffix="pt" />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>