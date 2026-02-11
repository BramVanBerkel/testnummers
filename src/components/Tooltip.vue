<template>
  <div class="relative inline-block">
    <slot />

    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="show"
        :class="[
          'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10 w-max max-w-xs px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm select-none dark:bg-gray-700'
        ]"
      >
        {{ text }}

        <div
          class="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 bg-gray-900 dark:bg-gray-700"
        />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  show?: boolean
  text?: string
}>(), {
  show: false,
  text: 'Copied!'
})

</script>
