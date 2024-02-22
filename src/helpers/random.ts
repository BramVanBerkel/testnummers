/**
 * Returns a random element from the given array
 * @param array
 */
export function random<T> (array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}
