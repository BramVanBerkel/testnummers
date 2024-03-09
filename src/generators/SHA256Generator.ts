export async function generateSHA256 (value: string | undefined): Promise<string> {
  if (value === undefined || value === '') {
    return ''
  }

  // hash the value
  const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer))

  // convert bytes to hex string
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}
