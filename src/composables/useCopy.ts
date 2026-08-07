import { type Ref } from 'vue'
import { jellyToast } from '../vendor/jelly/jelly.js'

// `label` names the field in the toast, so it reads as the tail of "Copied ...".
// Cards with two copy buttons need it to tell which one fired, and it beats
// echoing the value back: a SHA256 or bcrypt hash is unreadable at toast width,
// and a password does not belong on screen after being copied.
export function useCopy (value: Ref<string | number | undefined>, label: string): { handleCopy: () => Promise<void> } {
  async function handleCopy (): Promise<void> {
    // Empty is as much "nothing to copy" as undefined, and the two are not
    // interchangeable across the callers: SHA256 and Password hand back '' for
    // no input and no character sets respectively, where the fields that are
    // only ever filled by a generator stay undefined until it first runs.
    // Compared against '' rather than falsy, so a timestamp of 0 still copies.
    if (value.value === undefined || value.value === '') {
      return
    }

    await navigator.clipboard.writeText(value.value.toString())

    jellyToast(`Copied ${label}`, { tone: 'success' })
  }

  return { handleCopy }
}
