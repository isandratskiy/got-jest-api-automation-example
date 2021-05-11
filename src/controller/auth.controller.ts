import { AuthResponse, User } from '../types/user.type';
import { BaseController } from './base.controller';
import { Request } from '../request';

export class AuthController extends BaseController {
	async login(user: User) {
		return (
			await Request.to()
				.url('https://test-api.k6.io/auth/token/login')
				.headers(this.headers)
				.method('POST')
				.body(user)
				.got<AuthResponse>()
		).body.access;
	}
}
