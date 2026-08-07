import { computed, type Ref } from 'vue'
import { jellyToast } from '../vendor/jelly/jelly.js'

export function useCopy (value: Ref<string | number | undefined>, label: string): { canCopy: Ref<boolean>, handleCopy: () => Promise<void> } {
  // Generators hand back '' as well as undefined for no value. Not falsy, so a
  // timestamp of 0 still copies.
  const canCopy = computed<boolean>(() => value.value !== undefined && value.value !== '')

  async function handleCopy (): Promise<void> {
    if (!canCopy.value) {
      return
    }

    await navigator.clipboard.writeText(String(value.value))

    jellyToast(`Copied ${label}`, { tone: 'success' })
  }

  return { canCopy, handleCopy }
}
