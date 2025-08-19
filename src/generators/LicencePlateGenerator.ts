export function generateLicencePlate (): string {
  const letters = ['G', 'H', 'J', 'K', 'L', 'N', 'P', 'R', 'S', 'T', 'X', 'Z']

  const patterns = [
    '99-XX-XX',
    '99-XXX-9',
    '9-XXX-99',
    'XX-999-X',
    'X-999-XX',
    'XXX-99-X'
  ]

  const selectedPattern = patterns[Math.floor(Math.random() * patterns.length)]

  let result = ''
  for (const char of selectedPattern) {
    if (char === 'X') {
      result += letters[Math.floor(Math.random() * letters.length)]
    } else if (char === '9') {
      result += Math.floor(Math.random() * 9)
    } else {
      result += char
    }
  }

  return result
}
