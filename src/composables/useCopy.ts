import { type Ref } from 'vue'
import { jellyToast } from '../vendor/jelly/jelly.js'

export function useCopy<T extends Ref<string | number | undefined>> (valueRef: T): { handleCopy: () => Promise<void> } {
  async function handleCopy (): Promise<void> {
    if (valueRef.value === undefined) {
      return
    }

    await navigator.clipboard.writeText(valueRef.value.toString())

    jellyToast('Copied!', { tone: 'success' })
  }

  return { handleCopy }
}
