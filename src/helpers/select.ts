// Focus events retarget to the host, so on a <jelly-input> the event target is
// the element, not the native <input> in its shadow root.
export function select (event: FocusEvent): void {
  const target = event.target as HTMLElement

  const input = target instanceof HTMLInputElement
    ? target
    : target.shadowRoot?.querySelector('input')

  input?.select()
}
