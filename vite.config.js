import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { patchCssModules } from 'vite-css-modules'
import viteVue from '@vitejs/plugin-vue'
import viteFastify from '@fastify/vite/plugin'
import viteFastifyVue from '@fastify/vue/plugin'

import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

const path = fileURLToPath(import.meta.url)
const root = join(dirname(path), 'app')

export default {
  root,
  plugins: [
    patchCssModules(),
    viteVue(),
    viteFastify(),
    viteFastifyVue(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwind(),
        autoprefixer()
      ]
    }
  },
  resolve: {
    alias: {
      '@': root
    }
  },
  build: {
    target: 'es2022'
  }
}
