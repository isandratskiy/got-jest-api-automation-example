import { UserController } from '../controller/user.controller'
import { AuthController } from '../controller/auth.controller'
import { User } from '../types/user.type'
import { CrocodilesController } from '../controller/crocodiles.controller'
import { ControllerOptions } from '../controller/base.controller'

export class ApiClient {
  public readonly user: UserController
  public readonly auth: AuthController
  public readonly crocodile: CrocodilesController

  constructor(params?: ControllerOptions) {
    this.user = new UserController(params)
    this.auth = new AuthController(params)
    this.crocodile = new CrocodilesController(params)
  }

  static async authToken(user: User) {
    return new ApiClient({
      headers: await new ApiClient().auth.tokenLogin(user)
    })
  }

  static async authCookies(user: User) {
    return new ApiClient({
      cookies: await new ApiClient().auth.cookiesLogin(user)
    })
  }

  static async register(user: User) {
    return {
      ...user,
      ...(await new ApiClient().user.register(user))
    }
  }
}
