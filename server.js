import fastify from 'fastify'
import fastifyVite from '@fastify/vite'

import fastifySession from '@fastify/session'
import fastifyCookie from '@fastify/cookie'
import fastifyFormbody from '@fastify/formbody'

const server = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger'
    }
  }
})

server.register(fastifyFormbody)
server.register(fastifyCookie)
server.register(fastifySession, { secret: "a secret with minimum length of 31 characters" })

await server.register(fastifyVite, {
  root: import.meta.url,
  renderer: '@fastify/vue',
})

await server.vite.ready()
await server.listen({ port: 3000 })
