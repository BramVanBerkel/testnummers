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
          'absolute z-10 w-max max-w-xs px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm select-none dark:bg-gray-700',
          positionClasses
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

<script setup>
import { computed } from 'vue'

// Define props
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: 'Copied!'
  },
  position: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
  }
})

// Calculate Tailwind classes based on the 'position' prop
const positionClasses = computed(() => {
  switch (props.position) {
    case 'bottom':
      // Positions below the element, centered
      return 'top-full left-1/2 -translate-x-1/2 mt-2'
    case 'left':
      // Positions to the left of the element, centered
      return 'right-full top-1/2 -translate-y-1/2 mr-2'
    case 'right':
      // Positions to the right of the element, centered
      return 'left-full top-1/2 -translate-y-1/2 ml-2'
    case 'top':
    default:
      // Positions above the element, centered
      return 'bottom-full left-1/2 -translate-x-1/2 mb-2'
  }
})
</script>
