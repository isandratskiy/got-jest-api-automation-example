export interface User {
  username: string
  first_name: string
  last_name: string
  email: string
  password: string
}

export interface Credentials {
  username: string
  password: string
}

export interface AuthResponse {
  refresh: string
  access: string
}
