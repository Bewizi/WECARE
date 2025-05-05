<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <main
    class="bg-[url('/images/background.png')] h-[150vh] sm:h-screen md:h-screen lg:h-screen bg-cover bg-no-repeat lg:overflow-hidden"
  >
    <AppHeader />
    <RouterView />
  </main>
</template>

<style scoped></style>
