<script setup>
import { cn } from '@/lib/utils';
import { defineProps, onMounted, ref, onUnmounted, watch } from 'vue';

const props = defineProps({
  font: {
    type: [Object, String],
    required: true
  },
  style: {
    type: Object,
    required: false,
    default: null
  }
});

const isLoading = ref(true);
const loadedPreviewFace = ref(null);

async function loadFontPreview(font) {
  if (typeof font === 'string' || font.category === 'local') {
    isLoading.value = false;
    return;
  }

  const previewFamily = `Preview ${font.family}`;
  const previewFace = new FontFace(previewFamily, `url(${font.menu})`);
  try {
    await previewFace.load();
    document.fonts.add(previewFace);

    loadedPreviewFace.value = previewFace
    isLoading.value = false
  } catch (error) {
    console.error("couldn't load font preview", font.family, error);
    isLoading.value = false;
  }
}

function removeFontPreview() {
  if (!loadedPreviewFace.value)
    return;

  document.fonts.delete(loadedPreviewFace.value);

  loadedPreviewFace.value = null;
  isLoading.value = true;
}

onMounted(() => {
  loadFontPreview(props.font);
});

onUnmounted(() => {
  removeFontPreview();
});

watch(() => props.font, (font) => {
  removeFontPreview();
  loadFontPreview(font);
});
</script>

<template>
  <div class="flex flex-row justify-between items-center w-full">
    <span 
      :class="cn('text-xl', isLoading && 'animate-pulse bg-muted')"
      :style="{ ...props.style || {}, fontFamily: `Preview ${font.family}, ${font.family}` }"
    >
      {{ font.family }}
    </span>
    <small>{{ font.category }}</small>
  </div>
</template>