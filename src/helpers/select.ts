export function select(event: FocusEvent) {
    const target = event.target as HTMLInputElement;

    target.select();
}