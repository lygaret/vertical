<script>
export { default } from '/:router.vue'
import { createPinia } from 'pinia'

export function configure ({ app, router }) {
  const pinia = createPinia()

  app.use(pinia)
}
</script>
