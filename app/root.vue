<script>
export { default } from '/:router.vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

export function configure ({ app }) {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedState)

  app.use(pinia)
}
</script>
