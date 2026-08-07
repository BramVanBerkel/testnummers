import { type Ref } from 'vue'
import { jellyToast } from '../vendor/jelly/jelly.js'

export function useCopy (value: Ref<string | number | undefined>, label: string): { handleCopy: () => Promise<void> } {
  async function handleCopy (): Promise<void> {
    // Generators hand back '' as well as undefined for no value. Not falsy, so
    // a timestamp of 0 still copies.
    if (value.value === undefined || value.value === '') {
      return
    }

    await navigator.clipboard.writeText(value.value.toString())

    jellyToast(`Copied ${label}`, { tone: 'success' })
  }

  return { handleCopy }
}
