enum CharacterSet {
  UppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  LowercaseLetters = 'abcdefghijklmnopqrstuvwxyz',
  Numbers = '0123456789',
  Symbols = '^*%$!&@#'
}

export function generatePassword (length: number, lowercase: boolean, uppercase: boolean, numbers: boolean, symbols: boolean): string {
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
