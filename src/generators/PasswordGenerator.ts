export interface PasswordScore {
  estimatedCrackTime: string
  severity: string
}

interface GeneratedPassword {
  password: string
  score: PasswordScore
}

enum CharacterSet {
  UppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  LowercaseLetters = 'abcdefghijklmnopqrstuvwxyz',
  Numbers = '0123456789',
  Symbols = '^*%$!&@#'
}

/**
 * average amount of hash/s for 12 RTX 5090's hashing bcrypt(10)
 * based on research from https://www.hivesystems.com/password-table
 */
const DEFAULT_ATTEMPTS_PER_SECOND = 3732000n

export function generatePasswordAndScore (length: number, lowercase: boolean, uppercase: boolean, numbers: boolean, symbols: boolean): GeneratedPassword {
  return {
    password: generatePassword(length, lowercase, uppercase, numbers, symbols),
    score: generateScore(length, lowercase, uppercase, numbers, symbols)
  }
}

function generatePassword (length: number, lowercase: boolean, uppercase: boolean, numbers: boolean, symbols: boolean): string {
  let characters = ''
  if (lowercase) characters += CharacterSet.LowercaseLetters
  if (uppercase) characters += CharacterSet.UppercaseLetters
  if (numbers) characters += CharacterSet.Numbers
  if (symbols) characters += CharacterSet.Symbols

  if (characters === '') {
    return ''
  }

  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex]
  }

  return password
}

function generateScore (length: number, lowercase: boolean, uppercase: boolean, numbers: boolean, symbols: boolean): PasswordScore {
  const charsetSizes = {
    UppercaseLetters: CharacterSet.UppercaseLetters.length,
    LowercaseLetters: CharacterSet.LowercaseLetters.length,
    Numbers: CharacterSet.Numbers.length,
    Symbols: CharacterSet.Symbols.length
  }

  let charsetSize = 0
  if (numbers) charsetSize += charsetSizes.Numbers
  if (lowercase) charsetSize += charsetSizes.LowercaseLetters
  if (uppercase) charsetSize += charsetSizes.UppercaseLetters
  if (symbols) charsetSize += charsetSizes.Symbols

  const totalCombinations = BigInt(charsetSize) ** BigInt(length)

  const seconds = totalCombinations / DEFAULT_ATTEMPTS_PER_SECOND

  const sec = 1n
  const min = 60n * sec
  const hour = 60n * min
  const day = 24n * hour
  const year = 365n * day
  const thousand = 1000n
  const million = thousand * thousand
  const billion = thousand * million
  const trillion = thousand * billion
  const quadrillion = thousand * trillion
  const quintillion = thousand * quadrillion

  let formattedSeconds = ''
  if (seconds < min) {
    formattedSeconds = `${seconds} ${seconds === 1n ? 'second' : 'seconds'}`
  } else if (seconds < hour) {
    const minutes = seconds / min
    formattedSeconds = `${minutes} ${minutes === 1n ? 'minute' : 'minutes'}`
  } else if (seconds < day) {
    const hours = seconds / hour
    formattedSeconds = `${hours} ${hours === 1n ? 'hour' : 'hours'}`
  } else if (seconds < year) {
    const days = seconds / day
    formattedSeconds = `${days} ${days === 1n ? 'day' : 'days'}`
  } else if (seconds < thousand * year) {
    const years = seconds / year
    formattedSeconds = `${years} ${years === 1n ? 'year' : 'years'}`
  } else if (seconds < million * year) formattedSeconds = `${(seconds / (thousand * year))}k years`
  else if (seconds < billion * year) formattedSeconds = `${(seconds / (million * year))}m years`
  else if (seconds < trillion * year) formattedSeconds = `${(seconds / (billion * year))}bn years`
  else if (seconds < quadrillion * year) formattedSeconds = `${(seconds / (trillion * year))}tn years`
  else if (seconds < quintillion * year) formattedSeconds = `${(seconds / (quadrillion * year))}qd years`
  else formattedSeconds = `${(seconds / (quintillion * year))}qn years`

  let severity = ''
  if (seconds < year) severity = 'error'
  else if (seconds < million * year) severity = 'warn'
  else severity = 'success'

  return {
    estimatedCrackTime: formattedSeconds,
    severity
  }
}
