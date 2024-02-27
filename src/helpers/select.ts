export function select (event: FocusEvent): void {
  const target = event.target as HTMLInputElement

  target.select()
}
