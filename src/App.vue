<script lang="ts" setup>
import BSN from "./components/BSN.vue";
import IBAN from "./components/IBAN.vue";
</script>

<template>
  <div class="bg-indigo-600 pb-32">
    <nav class="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none">
      <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div
            class="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
          <div class="flex flex-1 px-2 lg:ml-6">
            <span class="text-zinc-200 text-2xl font-mono">Testnummers.dev</span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <main class="-mt-32 pt-10 columns-1 lg:columns-2">
    <div class="px-4 pb-12 lg:px-8">
      <div class="overflow-hidden bg-white rounded-lg shadow">
        <h1 class="border-b border-gray-200 text-lg font-bold px-4 py-4">BSN</h1>
        <div class="px-4 py-5">
          <div class="flex rounded-md shadow-sm">
            <BSN/>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 pb-12 lg:px-8">
      <div class="overflow-hidden bg-white rounded-lg shadow">
        <h1 class="border-b border-gray-200 text-lg font-bold px-4 py-4">IBAN</h1>
        <div class="px-4 py-5">
          <div class="flex">
            <IBAN/>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        asdasd
      </div>
    </div>
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
