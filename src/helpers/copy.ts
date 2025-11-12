import { type Ref } from 'vue'

export async function copy (value: string | number | undefined, ref: Ref<boolean>): Promise<void> {
  if (value === undefined) {
    return
  }

  await navigator.clipboard.writeText(value.toString())

  ref.value = true

  setTimeout(() => {
    ref.value = false
  }, 2000)
}
