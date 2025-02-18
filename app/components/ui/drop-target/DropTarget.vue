<script setup>
import { CloudUploadIcon } from 'lucide-vue-next';
import { ref, defineProps, defineEmits } from 'vue'

// Define props
const props = defineProps({
    label:     { type: String },
    accept:    { type: String },
    disabled:  { type: Boolean, default: false },
    multiple:  { type: Boolean, default: false },
    className: { type: String, default: '' },
    cloudClassName: { type: String, default: '' },
    maxFiles:  { type: Number, default: 1 },
})

// Define emits
const emit = defineEmits(['selected'])

const processFiles = async (files) => {
  if (!props.disabled)
    emit('selected', props.multiple ? files : files[0])
}

// Component state
const fileInput = ref(null)

// Event handlers
const handleClick = () => {
  if (!props.disabled && fileInput.value) {
    fileInput.value.click()
  }
}

const handleFileChange = async (event) => {
  if (event.target.files) {
    await processFiles(Array.from(event.target.files))
  }
}

const handleDrop = async (event) => {
  if (props.disabled) return
  const files = Array.from(event.dataTransfer?.files || [])
  await processFiles(files)
}

const handleDragOver = (event) => {
  if (!props.disabled) {
    event.preventDefault()
  }
}
</script>
<template>
  <div
    :class="[
      'relative bg-background',
      'minh-40 w-full rounded-md p-4',
      'group flex flex-col items-center justify-center border-2 border-dashed transition-colors duration-200',
      !props.disabled
        ? 'hover:cursor-pointer hover:border-accent hover:bg-accent dark:border-accent dark:hover:border-accent dark:hover:bg-accent'
        : 'opacity-50',
      className
    ]"
    @drop.prevent="handleDrop"
    @dragover.prevent="handleDragOver"
    @click="handleClick"
  >
    <input
      ref="fileInput"
      type="file"
      :accept="accept"
      :multiple="multiple"
      class="hidden"
      @change="handleFileChange"
    />

    <div :class="['w-full flex flex-col justify-center items-center space-y-2', props.cloudClassName]">
      <CloudUploadIcon size="4em" class="m-2 pointer-events-none" />
      <div class="w-full flex flex-col justify-center items-center">
        <small>
          <slot name="label">{{ props.label }}</slot>
        </small>
        <div class="w-full" @click.stop>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
