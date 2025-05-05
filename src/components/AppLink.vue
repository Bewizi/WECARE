<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  to: string
  className?: string
}>()
</script>

<template>
  <RouterLink :to="to" :class="className">
    <slot />
  </RouterLink>
</template>

<style scoped></style>
