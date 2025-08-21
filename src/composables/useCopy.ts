import { ref, type Ref } from 'vue'
import { copy } from '../helpers/copy.ts'

export function useCopy<T extends Ref<string | undefined>> (valueRef: T): { copySuccess: Ref<boolean, boolean>, handleCopy: () => Promise<void> } {
  const copySuccess = ref<boolean>(false)

  async function handleCopy (): Promise<void> {
    await copy(valueRef.value, copySuccess)
  }

  return {
    copySuccess,
    handleCopy
  }
}
