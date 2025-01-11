<template>
  <h1>{{ message }}</h1>
  <p><img :src="logo" /></p>
</template>

<script setup>
const message = 'Welcome to vertical'
</script>

<script>
export function getMeta () {
  return {
    title: 'Welcome to @fastify/vue!'
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
