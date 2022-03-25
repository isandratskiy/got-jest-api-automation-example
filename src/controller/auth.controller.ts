import { AuthResponse, Credentials } from '../types/user.type'
import { BaseController } from './base.controller'

export class AuthController extends BaseController {
  async tokenLogin(user: Credentials) {
    const response = await this.request()
      .url('https://test-api.k6.io/auth/token/login')
      .method('POST')
      .body(user)
      .got<AuthResponse>()

    const authToken = response.body.access

    return {
      ...response.headers,
      ...{ Authorization: `Bearer ${authToken}` }
    }
  }

  async cookiesLogin(user: Credentials) {
    await this.request()
      .url('https://test-api.k6.io/auth/cookie/login')
      .method('POST')
      .body(user)
      .got()

    return await this.request().getCookies()
  }

  async getCookies() {
    return (await this.request().getCookies()).getCookiesSync(
      'https://test-api.k6.io'
    )
  }

  async getHeaders() {
    return await this.request().getHeaders()
  }
}
