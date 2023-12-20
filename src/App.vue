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

  <main class="container mx-auto grid grid-cols-1 lg:grid-cols-2 justify-stretch -mt-32 pt-10 xl:px-24">
    <div class="px-4 pb-12 sm:px-6 md:w-full lg:max-w-md">
      <div class="bg-white rounded-lg shadow divide-y">
        <h1 class="text-lg font-bold py-4 px-4 sm:px-6">BSN</h1>
        <div class="px-4 sm:px-6 py-5">
          <div class="rounded-md shadow-sm">
            <BSN/>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:max-w-md px-4 pb-12 sm:px-6 lg:px-8">
      <div class="overflow-hidden bg-white rounded-lg shadow">
        <h1 class="border-b border-gray-200 text-lg font-bold px-4 py-4 sm:px-6">IBAN</h1>
        <div class="px-4 py-5 sm:px-6">
          <div class="flex">
            <IBAN/>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:max-w-md px-4 pb-12 sm:px-6 lg:px-8">
      <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        asdasd
      </div>
    </div>
  </main>
</template>
