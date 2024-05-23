import crypto from 'crypto'
import keytar from 'keytar'
import sqlite3 from 'sqlite3'

interface CookieRow {
  host_key: string
  name: string
  value: string
}

interface RawCookieRow {
  encrypted_value: Buffer
  host_key: string
  name: string
}

async function getKey(): Promise<Buffer> {
  const rawKey = await keytar.getPassword('Brave Safe Storage', 'Brave')
  if (!rawKey) {
    throw new Error('No encryption key found in keychain')
  }
  console.log(`Raw Key from Keychain: ${rawKey}`)

  // Derive the key using pbkdf2 with sha1, salt 'saltysalt', and 1003 iterations, and get the first 16 bytes
  const derivedKey = crypto.pbkdf2Sync(rawKey, 'saltysalt', 1003, 16, 'sha1')
  console.log(`Derived Key: ${derivedKey.toString('hex')}`)

  return derivedKey
}

function decryptWithChromium(key: Buffer, encryptedValue: Buffer): string {
  if (encryptedValue.length <= 3) {
    throw new Error('Ciphertext length is invalid')
  }

  const iv = Buffer.alloc(16, 32) // 16 bytes of 0x20 (space character)
  const ciphertext = encryptedValue.slice(3)

  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv)
  let decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()])

  // Remove padding
  const paddingLength = decrypted[decrypted.length - 1]
  decrypted = decrypted.slice(0, -paddingLength)

  return decrypted.toString('utf-8')
}

async function getCookies(dbPath: string): Promise<CookieRow[]> {
  const db = new sqlite3.Database(dbPath)

  const key = await getKey()

  return new Promise((resolve, reject) => {
    db.all(
      'SELECT host_key, name, encrypted_value FROM cookies',
      [],
      (err, rows: RawCookieRow[]) => {
        if (err) {
          return reject(err)
        }

        const cookies: CookieRow[] = rows.map((row) => {
          const { encrypted_value, host_key, name } = row
          let value = ''
          if (!encrypted_value) {
            value = 'None'
          } else {
            try {
              value = decryptWithChromium(key, encrypted_value)
            } catch (error) {
              const errorMessage = (error as Error).message
              console.log(
                `Error decrypting cookie for ${name} at ${host_key}: ${errorMessage}`,
              )
            }
          }
          return { host_key, name, value }
        })

        resolve(cookies)
      },
    )

    db.close()
  })
}

export async function POST(request: Request) {
  const data = await request.json()
  console.log('Received data:', data)

  const dbPath =
    '/Users/dwurtz/Library/Application Support/BraveSoftware/Brave-Browser/Default/Cookies'
  const cookies = await getCookies(dbPath)
  console.log('Cookies:\n', cookies)

  return new Response(JSON.stringify({ data, message: 'Data received' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  })
}
