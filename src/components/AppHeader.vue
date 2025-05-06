<script setup lang="ts">
import AppContainer from './AppContainer.vue'
import AppLink from './AppLink.vue'
</script>
<template>
  <AppContainer class="lg:pt-14 hidden lg:block">
    <div
      class="border-2 border-black px-8 py-2 rounded-lg shadow-[-1px_1.56px_1px_1px_rgba(0,0,0,0.9)] shadow-black bg-white"
    >
      <header class="flex items-center justify-between">
        <div>
          <AppLink to="/" class="font-kanit font-bold text-2xl">WeCare</AppLink>
        </div>

        <nav>
          <ul class="flex justify-between items-center space-x-60">
            <li>
              <AppLink to="/whitepaper" class="font-kanit text-xl">Whitepaper</AppLink>
            </li>
            <li>
              <AppLink to="/telegram" class="font-kanit text-xl">Telegram</AppLink>
            </li>
          </ul>
        </nav>

        <div
          class="bg-[#A1FB05] px-8 py-2 rounded-xl border-2 border-black shadow-[-1px_1.56px_1px_1px_rgba(0,0,0,0.9)] shadow-black"
        >
          <button class="font-bold font-kanit text-lg">Chart</button>
        </div>
      </header>
    </div>
  </AppContainer>
</template>

<style scoped></style>
