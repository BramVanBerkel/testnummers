import { type Ref } from 'vue'
import { jellyToast } from '../vendor/jelly/jelly.js'

// `label` names the field in the toast, so it reads as the tail of "Copied ...".
// Cards with two copy buttons need it to tell which one fired, and it beats
// echoing the value back: a SHA256 or bcrypt hash is unreadable at toast width,
// and a password does not belong on screen after being copied.
export function useCopy<T extends Ref<string | number | undefined>> (valueRef: T, label: string): { handleCopy: () => Promise<void> } {
  async function handleCopy (): Promise<void> {
    if (valueRef.value === undefined) {
      return
    }

    await navigator.clipboard.writeText(valueRef.value.toString())

    jellyToast(`Copied ${label}`, { tone: 'success' })
  }

  return { handleCopy }
}
