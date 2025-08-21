import { compareSync, hashSync } from 'bcryptjs'

export function generateBcrypt (input: string | undefined): string {
  if (input === undefined || input === '') {
    return ''
  }

  return hashSync(input)
}

export function checkBcrypt (input: string | undefined, hash: string | undefined): boolean | undefined {
  if ((input == null) || (hash == null)) {
    return undefined
  }

  return compareSync(input, hash)
}
