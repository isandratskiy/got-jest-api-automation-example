import { CookieJar } from 'tough-cookie'
import { Request } from '../request'

export type ControllerOptions = {
  headers?: any
  cookies?: CookieJar
}

export class BaseController {
  protected readonly options: {
    headers?: any
    cookies: CookieJar
  }

  constructor(options?: ControllerOptions) {
    this.options = {
      ...{ cookies: new CookieJar() },
      ...options
    }
  }

  protected request(): Request {
    const request = Request.to().withCookies(this.options.cookies as any)
    if (this.options.headers ?? false) request.headers(this.options.headers)
    return request
  }
}
