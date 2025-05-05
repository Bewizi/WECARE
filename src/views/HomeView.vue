<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <AppContainer>
    <section class="flex justify-between items-center lg:mt-8 flex-col-reverse lg:flex-row">
      <div class="lg:max-w-2xl">
        <h1
          class="mb-5 text-7xl font-extrabold font-kanit italic text-[#A3F90C] [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.9)] hidden lg:block"
        >
          $We Care
        </h1>
        <p class="hidden lg:block mb-8 font-hankenGrotesk text-2xl text-black">
          WeCare (WEC) is a decentralized cryptocurrency <br />
          designed to generate consistent charitable contributions through a 5% tax levied on each
          buy and sell transaction.
        </p>
        <div class="flex items-center justify-center">
          <p class="max-w-sm lg:hidden mb-8 font-hankenGrotesk text-lg text-black text-center">
            WeCare (WEC) is a decentralized cryptocurrency designed to generate consistent
            charitable contributions through a 5% tax levied on each buy and sell transaction.
          </p>
        </div>

        <!-- input -->
        <div
          class="hidden lg:flex items-center gap-8 bg-white shadow-md shadow-black rounded-lg px-5 py-2 w-[500px] mb-5"
        >
          <input
            class="px-2 py-2 text-lg font-kanit w-full outline-none text-black placeholder:text-black"
            placeholder="4S94Bfigd8f235dHkI04JfkXs51tPump"
          />
          <div
            class="bg-[#A1FB05] px-4 py-2 rounded-xl border-2 border-black shadow-[-1px_1.56px_1px_1px_rgba(0,0,0,0.9)] shadow-black"
          >
            <button class="font-kanit text-xl">Copy</button>
          </div>
        </div>
        <!-- input -->

        <div class="hidden lg:block">
          <h4 class="font-kanit font-medium text-2xl text-white">Join the community</h4>
        </div>

        <div
          class="bg-[#A1FB05] px-4 py-2 rounded-xl border-2 border-black shadow-[-1px_1.56px_1px_1px_rgba(0,0,0,0.9)] shadow-black flex items-center justify-center lg:hidden"
        >
          <button class="font-kanit text-xl">Chart</button>
        </div>

        <!-- icons -->
        <section class="mt-8 flex items-center justify-center lg:justify-start gap-2">
          <div
            class="w-10 h-10 bg-white shadow-[-1px_1.56px_1px_1px_rgba(0,0,0,0.9)] shadow-black rounded-lg grid items-center justify-center"
          >
            <Icon icon="ic:twotone-telegram" width="26" height="26" style="color: #000000" />
          </div>
          <div
            class="w-10 h-10 bg-white shadow-[-1px_1.56px_1px_1px_rgba(0,0,0,0.9)] shadow-black rounded-lg grid items-center justify-center"
          >
            <Icon icon="devicon:twitter" width="24" height="24" />
          </div>
        </section>
      </div>

      <!-- hero image -->
      <div class="relative">
        <div>
          <img src="/images/weCare.png" alt="We Care" />
        </div>

        <!-- cloud 1 -->
        <div class="absolute top-12 right-7">
          <img src="/public/images/Cloud.png" alt="Cloud" class="w-[100px]" />
        </div>
        <!-- cloud -->

        <!-- cloud 2 -->
        <div class="absolute top-64 right-5 -z-10">
          <img src="/public/images/Cloud.png" alt="Cloud" class="w-[200px]" />
        </div>
        <!-- cloud -->
      </div>
    </section>
  </AppContainer>
</template>

<style scoped></style>
