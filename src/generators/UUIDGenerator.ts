import { NIL as NIL_UUID, MAX as MAX_UUID, v1 as uuidv1, v4 as uuidv4, v6 as uuidv6, v7 as uuidv7 } from 'uuid'

export const UUIDVersions: Array<{ name: string, code: string, generator: () => string }> = [
  {
    name: 'NIL UUID',
    code: 'NIL',
    generator: () => {
      return NIL_UUID
    }
  },
  {
    name: 'MAX UUID',
    code: 'MAX',
    generator: () => {
      return MAX_UUID
    }
  },
  {
    name: 'UUID V1',
    code: 'V1',
    generator: () => {
      return uuidv1()
    }
  },
  {
    name: 'UUID V4',
    code: 'V4',
    generator: () => {
      return uuidv4()
    }
  },
  {
    name: 'UUID V6',
    code: 'V6',
    generator: () => {
      return uuidv6()
    }
  },
  {
    name: 'UUID V7',
    code: 'V7',
    generator: () => {
      return uuidv7()
    }
  }
]

export function generateUUID (code: string): string {
  const version = UUIDVersions.find(version => version.code === code)

  if (version != null) {
    return version.generator()
  }

  return ''
}
