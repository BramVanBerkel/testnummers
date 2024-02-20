<template>
  <div class="break-inside-avoid px-4 pb-12 lg:px-8">
    <div class="bg-white rounded-lg shadow">
      <h1 class="border-b border-gray-200 text-lg font-bold px-4 py-4">{{ name }}</h1>
      <div class="px-4 py-5">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['name'])
</script>