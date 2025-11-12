export function generateDriversLicenceNumber (): string {
  let result = ''
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 10)
    result += randomNumber.toString()
  }
  return result
}
