<script setup lang="ts">
import { ArrowPathIcon } from '@heroicons/vue/24/outline'

defineProps<{
  generateSuccess: boolean
  onClick: () => void
}>()
</script>

<template>
  <InputGroupAddon
    class="cursor-pointer"
    @click="onClick()"
  >
    <ArrowPathIcon
      :class="{'rotate-45': generateSuccess, 'text-green-600': generateSuccess}"
      class="-ml-0.5 w-6 h-6 text-gray-400 transition-transform duration-300"
    />
  </InputGroupAddon>
</template>
