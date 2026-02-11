function generateAccountNumber (): string {
  const digits: number[] = []
  digits[0] = Math.floor(Math.random() * 9) + 1
  for (let i = 1; i < 8; i++) {
    digits[i] = Math.floor(Math.random() * 10)
  }

  let sum = 0
  for (let i = 0; i < 8; i++) {
    sum += digits[i] * (10 - i)
  }

  // Solve for digit 8 (weight 2) and digit 9 (weight 1):
  // We need (sum + d8*2 + d9) % 11 == 0
  // Pick d8 randomly, then d9 = (11 - (sum + d8*2) % 11) % 11
  // d9 can be 0-10, so if it's 10, adjust d8 by 1 which shifts d9 by 2 (mod 11), making it 8
  digits[8] = Math.floor(Math.random() * 10)
  let remainder = (sum + digits[8] * 2) % 11
  digits[9] = (11 - remainder) % 11
  if (digits[9] === 10) {
    digits[8] = (digits[8] + 1) % 10
    remainder = (sum + digits[8] * 2) % 11
    digits[9] = (11 - remainder) % 11
  }

  return digits.join('')
}

export interface Bank { name: string, code: string }
export const banks: Bank[] = [
  { name: 'ABN AMRO', code: 'ABNA' },
  { name: 'ASN', code: 'ASNB' },
  { name: 'bunq', code: 'BUNQ' },
  { name: 'Deutsche Bank', code: 'DEUT' },
  { name: 'ING', code: 'INGB' },
  { name: 'Knab', code: 'KNAB' },
  { name: 'Rabobank', code: 'RABO' },
  { name: 'Regiobank', code: 'RBRB' },
  { name: 'Revolut', code: 'REVO' },
  { name: 'SNS', code: 'ZWLB' },
  { name: 'Triodos', code: 'TRIO' },
  { name: 'Van Lanschot', code: 'FVLB' }
]

const countryCode = 'NL'

/**
 * Replaces the letters in the string with the index of the letter in the alphabet, starting with A = 10, B = 11, C = 12, etc.
 * Returns the resulting number as a BigInt
 * @param input
 */
function replaceChars (input: string): bigint {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const result = input.toUpperCase().split('').map(char => {
    const index = alphabet.indexOf(char)
    return index !== -1 ? (index + 10).toString() : char
  }).join('')

  return BigInt(result)
}

/**
 * Returns the control number by
 * - Calculating the modulo 97
 * - Subtracting the result off of 98
 *
 * If the result is less than 10 a leading 0 is added
 * @param value
 */
function calculateControlNumber (value: bigint): string {
  const controlNumber = 98 - Number(value % BigInt(97))

  if (controlNumber < 10) {
    // prepend with a zero if the control number is less than 10
    return '0' + String(controlNumber)
  }

  return String(controlNumber)
}

export function generateIBAN (bankCode: string): string {
  const accountNumber = generateAccountNumber()
  const controlString = replaceChars(bankCode + accountNumber + countryCode + '00')
  const controlNumber = calculateControlNumber(controlString)
  return `${countryCode}${controlNumber}${bankCode}${accountNumber}`
}
