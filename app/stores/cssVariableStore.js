import { computed, ref, watch } from "vue";
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
      get: ()      => fromCss(readVariable(key)),
      set: (value) => setVariable(key, toCss(value))
    })

    Object.defineProperty(comp, 'cssProperty', {
      value: key,
      writable: false,
      enumerable: false,
    })

    return comp;
  }

  function bindVariableFloat(key, unit) {
    return bindVariable(
      key,
      (value) => `${value}${unit}`,
      (value) => parseFloat(value)
    )
  }

  function setVariable(key, value) {
    variables.value[key] = value
  }

  function readVariable(key) {
    return variables.value[key] || (
      window.getComputedStyle(target.value).getPropertyValue(key)?.trim()
    );
  }

  function clearVariable(key) {
    delete variables.value[key]
  }

  function clearStore() {
    variables.value = {}
  }

  watch([target, variables], ([target, variables], [, oldVars]) => {
    if (target) {
      const toRemove = new Set();
      for (const key of Object.getOwnPropertyNames(oldVars)) {
        if (variables[key] === undefined)
          toRemove.add(key);
      }

      for (const key of toRemove) {
        target.style.setProperty(key, null);
      }

      for (const key of Object.getOwnPropertyNames(variables)) {
        target.style.setProperty(key, variables[key])
      }
    }
  }, { deep: true })

  return {
    variables,
    bindVariable,
    bindVariableFloat,
    setVariable,
    readVariable,
    clearVariable,
    clearStore,
  }
}, {
  persist: true
})
