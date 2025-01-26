import { ref } from "vue";
import { defineStore } from "pinia";

export const useSettingsStore = defineStore('settingsStore', () => {
    const allowGoogle = ref(false);

    return {
        allowGoogle
    }
}, {
    persist: true
})