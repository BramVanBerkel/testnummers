<template>
  <div class="break-inside-avoid px-4 pb-12 lg:px-8">
    <div class="bg-white rounded-lg shadow dark:bg-gray-800 dark:text-surface-0">
      <h1 class="border-b border-gray-200 text-lg font-bold px-4 py-4 dark:border-gray-700">
        {{ name }}
      </h1>
      <div class="px-4 py-5 dark:text-gray-200">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
