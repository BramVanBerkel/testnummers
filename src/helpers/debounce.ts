export function debounce (fn: () => void, ms = 200): () => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => { fn.apply(this) }, ms)
  }
}
