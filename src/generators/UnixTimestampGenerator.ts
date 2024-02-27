export function generateTimestamp (date: Date): number {
  return Math.trunc(date.getTime() / 1000)
}
