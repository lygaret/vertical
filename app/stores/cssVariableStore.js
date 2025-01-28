import { computed, ref, watchEffect } from "vue";
import { defineStore } from "pinia";

export const useCssVariables = defineStore('cssVariablesStore', () => {
  const variables = ref({})
  const target    = computed(() => window?.document?.documentElement)

  function bindVariable(
    key,
    toCss   = (value) => value,
    fromCss = (value) => value
  ) {
    const comp = computed({
      get: ()      => fromCss(variables.value[key] || readVariable(key)),
      set: (value) => setVariable(key, toCss(value))
    })

    Object.defineProperty(comp, 'cssProperty', {
      value: key,
      writable: false,
      enumerable: false,
    })

    return comp;
  }

  function setVariable(key, value) {
    variables.value[key] = value
  }

  function readVariable(key) {
    return window.getComputedStyle(target.value).getPropertyValue(key)?.trim()
  }

  function clearVariable(key) {
    delete variables.value[key]
  }

  watchEffect(() => {
    if (target.value) {
      Object.entries(variables.value).forEach(([key, value]) => {
        target.value.style.setProperty(key, value)
      })
    }
  })

  return {
    variables,
    bindVariable,
    setVariable,
    clearVariable,
  }
}, {
  persist: true
})