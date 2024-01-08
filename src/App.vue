<script lang="ts" setup>
import BSN from "./components/BSN.vue";
import IBAN from "./components/IBAN.vue";
import UUID from "./components/UUID.vue";
</script>

<template>
  <div class="bg-indigo-600 pb-32">
    <nav class="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none">
      <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div
            class="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
          <div class="flex flex-1 px-2 lg:ml-6">
            <span class="text-zinc-200 text-2xl title-font antialiased">Testnummers.dev</span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <main class="-mt-32 pt-10 grid grid-cols-1 lg:grid-cols-2">
    <div class="px-4 pb-12 lg:px-8">
      <div class="bg-white rounded-lg shadow">
        <h1 class="border-b border-gray-200 text-lg font-bold px-4 py-4">BSN</h1>
        <div class="px-4 py-5">
          <div class="flex">
            <BSN />
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 pb-12 lg:px-8">
      <div class="bg-white rounded-lg shadow">
        <h1 class="border-b border-gray-200 text-lg font-bold px-4 py-4">IBAN</h1>
        <div class="px-4 py-5">
          <div class="flex">
            <IBAN />
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 pb-12 lg:px-8">
      <div class="bg-white rounded-lg shadow">
        <h1 class="border-b border-gray-200 text-lg font-bold px-4 py-4">UUID</h1>
        <div class="px-4 py-5">
          <div class="flex">
            <UUID />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
