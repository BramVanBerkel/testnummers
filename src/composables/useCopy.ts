import { ref, type Ref } from 'vue'

export function useCopy<T extends Ref<string | number | undefined>> (valueRef: T): { copySuccess: Ref<boolean, boolean>, handleCopy: () => Promise<void> } {
  const copySuccess = ref<boolean>(false)

  async function handleCopy (): Promise<void> {
    if (valueRef.value === undefined) {
      return
    }

    await navigator.clipboard.writeText(valueRef.value.toString())

    copySuccess.value = true

    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  }

  return {
    copySuccess,
    handleCopy
  }
}
