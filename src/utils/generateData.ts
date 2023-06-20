import crypto from 'crypto'
import { config } from 'src/configs'

const algorithm = config.ALGORITHM
const secretKey = config.SECRET_KEY
const key = crypto.createHash('sha256').update(String(secretKey)).digest('base64').substr(0, 32)

const encrypt = (data: string) => {
  console.log(secretKey, algorithm)
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()])

  return `${iv.toString('hex')}:${encrypted.toString('hex')}`
}

const decrypt = (encrypted: string) => {
  const [iv, content] = encrypted.split(':')
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'))

  const decrypted = Buffer.concat([decipher.update(Buffer.from(content, 'hex')), decipher.final()])

  return decrypted.toString()
}

export { encrypt, decrypt }
