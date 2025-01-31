import fastify from 'fastify'
import fastifyVite from '@fastify/vite'

import fastifySession from '@fastify/session'
import fastifyCookie from '@fastify/cookie'
import fastifyFormbody from '@fastify/formbody'
import fastifyCompress from '@fastify/compress'

async function loadLocalFonts() {
  return [
    { family: 'sans-serif', category: 'local' },
    { family: 'serif', category: 'local' },
    { family: 'cursive', category: 'local' },
    { family: 'monospace', category: 'local' },
  ]
}

async function loadGoogleFonts() {
  try {
    const apikey   = process.env.GOOGLE_API_KEY
    const response = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${apikey}`
    );

    const data  = await response.json();
    const fonts = data.items.map((font) => ({
      category: font.category,
      family:   font.family,
      menu:     font.menu
    }))

    return fonts
  } catch (error) {
    console.error("Failed to fetch google fonts...", error);
    return [];
  }
}

const server = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger'
    }
  }
})

server.decorate('googleFonts', await loadGoogleFonts())
server.decorate('defaultFonts', await loadLocalFonts())

server.register(fastifyCompress)
server.register(fastifyFormbody)
server.register(fastifyCookie)
server.register(fastifySession, { secret: "a secret with minimum length of 31 characters" })

await server.register(fastifyVite, {
  root: import.meta.url,
  renderer: '@fastify/vue',
})

await server.vite.ready()
await server.listen({ host: '0.0.0.0', port: 3001 })
