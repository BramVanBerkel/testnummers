export function debounce (fn: () => void | Promise<void>, ms = 200): () => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => { void fn.apply(this) }, ms)
  }
}
