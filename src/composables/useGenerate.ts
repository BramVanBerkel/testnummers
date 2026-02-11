import { onMounted, ref, type Ref } from 'vue'

export function useGenerate (generatorFn: () => void | Promise<void>): { generateSuccess: Ref<boolean>, generate: (setSuccess?: boolean) => Promise<void> } {
  const generateSuccess = ref<boolean>(false)

  async function generate (setSuccess: boolean = true): Promise<void> {
    await generatorFn()

    if (setSuccess) {
      generateSuccess.value = true

      setTimeout(() => {
        generateSuccess.value = false
      }, 300)
    }
  }

  onMounted(() => { void generate(false) })

  return {
    generateSuccess,
    generate
  }
}
