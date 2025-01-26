import { computed, ref, watchEffect } from "vue";
import { defineStore } from "pinia";

export const useCssVariables = defineStore('cssVariablesStore', () => {
  const variables = ref({})
  const styletag  = ref(null)

  const declaration = computed(() => {
    return Object.entries(variables.value)
      .map(([key, value]) => `--${key}: ${value};`)
      .join("\n")
  });

  const mount = () => {
    if (window && window.document) {
      styletag.value = document.createElement("style")
      document.head.appendChild(styletag.value)
    }
  }

  const unmount = () => {
    if (window && window.document && styletag.value) {
      document.head.removeChild(styletag.value)
    }
  }

  watchEffect(() => {
    if (styletag.value) {
      styletag.value.innerHTML = declaration.value
    }
  })

  return {
    variables,
    declaration,
    mount,
    unmount,
  }
}, {
  persist: true
})