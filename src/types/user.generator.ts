import { User } from './user.type'

export function random(length: number): string {
  const charset = 'abcdefghijklmnopqrstuvwxyz'
  let res = ''
  while (length--) res += charset[(Math.random() * charset.length) | 0]
  return res
}

export function generateUser(): User {
  return {
    username: `crock${random(4)}`,
    first_name: `name${random(4)}`,
    last_name: `last${random(4)}`,
    email: `${random(10)}@example.com`,
    password: 'crockSuperPass911'
  }
}
