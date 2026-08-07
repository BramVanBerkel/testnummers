// Focus events are composed, so on a <jelly-input> they retarget to the host
// element rather than the native <input> painted inside its (open) shadow root.
export function select (event: FocusEvent): void {
  const target = event.target as HTMLElement

  const input = target instanceof HTMLInputElement
    ? target
    : target.shadowRoot?.querySelector('input')

  input?.select()
}
