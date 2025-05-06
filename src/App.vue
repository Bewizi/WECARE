<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import { useIntersectionObserver } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const imageRef = ref<HTMLElement | null>(null)

onMounted(() => {
  useIntersectionObserver(
    imageRef,
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeIn')
      } else {
        entry.target.classList.remove('animate__animated', 'animate__fadeIn')
      }
    },
    {
      threshold: 0.5,
    },
  )
})
</script>

<template>
  <main
    ref="imageRef"
    class="bg-[url('/images/background.png')] h-[150vh] sm:h-screen md:h-screen lg:h-screen bg-cover bg-no-repeat lg:overflow-hidden"
  >
    <AppHeader />
    <RouterView />
  </main>
</template>

<style scoped></style>
