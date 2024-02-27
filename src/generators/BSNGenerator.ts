export function generateBSN (): string {
  const numbers = {
    9: Math.floor(Math.random() * 7),
    8: Math.floor(Math.random() * 10),
    7: Math.floor(Math.random() * 10),
    6: Math.floor(Math.random() * 10),
    5: Math.floor(Math.random() * 10),
    4: Math.floor(Math.random() * 10),
    3: Math.floor(Math.random() * 10),
    2: Math.floor(Math.random() * 10)
  }

  if (numbers[9] === 0 && numbers[8] === 0) {
    numbers[8] = 1
  }

  const sum = (9 * numbers[9] + 8 * numbers[8] + 7 * numbers[7] + 6 * numbers[6] + 5 * numbers[5] + 4 * numbers[4] + 3 * numbers[3] + 2 * numbers[2])

  let checkNr = Math.floor(sum - Math.floor(sum / 11) * 11)

  if (checkNr > 9) {
    if (numbers[2] > 0) {
      numbers[2] -= 1
      checkNr = 8
    } else {
      numbers[2] += 1
      checkNr = 1
    }
  }

  return Object.values(numbers).reverse().map(String).join('') + checkNr
}
