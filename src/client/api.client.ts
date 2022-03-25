import { UserController } from '../controller/user.controller'
import { AuthController } from '../controller/auth.controller'
import { Credentials, User } from '../types/user.type'
import { CrocodilesController } from '../controller/crocodiles.controller'
import { ControllerOptions } from '../controller/base.controller'

type AuthMethod = {
  token: Promise<ApiClient>
  cookie: Promise<ApiClient>
}

type Authorization = {
  register: () => AuthMethod
  auth: () => AuthMethod
}

export class ApiClient {
  public readonly user: UserController
  public readonly auth: AuthController
  public readonly crocodile: CrocodilesController

  constructor(params?: ControllerOptions) {
    this.user = new UserController(params)
    this.auth = new AuthController(params)
    this.crocodile = new CrocodilesController(params)
  }

  static async unauthorized(user: User): Promise<Authorization> {
    let credentials: Credentials = {
      password: user.password,
      username: user.username,
    }

    return {
      register: () => {
        this._register(user)
        return {
          token: this._authToken(credentials),
          cookie: this._authCookies(credentials)
        }
      },
      auth: () => {
        return {
          token: this._authToken(credentials),
          cookie: this._authCookies(credentials)
        }
      }
    }
  }

  private static async _authToken(credentials: Credentials) {
    const headers = await new ApiClient().auth.tokenLogin(credentials)
    return new ApiClient({
      headers: headers
    })
  }

  private static async _authCookies(credentials: Credentials) {
    const cookies = await new ApiClient().auth.cookiesLogin(credentials)
    return new ApiClient({
      cookies: cookies
    })
  }

  private static async _register(user: User) {
    await new ApiClient().user.register(user)
  }
}
