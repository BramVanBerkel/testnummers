import { compare, hash } from 'bcryptjs'

export async function generateBcrypt (input: string | undefined): Promise<string> {
  if (input === undefined || input === '') {
    return ''
  }

  return await hash(input, 10)
}

export async function checkBcrypt (input: string | undefined, hashValue: string | undefined): Promise<boolean | undefined> {
  if ((input == null) || (hashValue == null)) {
    return undefined
  }

  return await compare(input, hashValue)
}
