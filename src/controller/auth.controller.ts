import { AuthResponse, User } from '../types/user.type';
import { BaseController } from './base.controller';

export class AuthController extends BaseController {
	async tokenLogin(user: User) {
		const response = await this.request()
			.url('https://test-api.k6.io/auth/token/login')
			.method('POST')
			.body(user)
			.got<AuthResponse>();
		return {
			...response.headers,
			...{ Authorization: `Bearer ${response.body.access}` }
		};
	}

	async cookiesLogin(user: User) {
		await this.request()
			.url('https://test-api.k6.io/auth/cookie/login')
			.method('POST')
			.body(user)
			.got();
		return await this.request().getCookies();
	}

	async getCookies() {
		return (await this.request().getCookies()).getCookiesSync(
			'https://test-api.k6.io'
		);
	}

	async getHeaders() {
		return await this.request().getHeaders();
	}
}
