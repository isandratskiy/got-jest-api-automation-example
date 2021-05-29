import { User } from '../types/user.type';
import { BaseController } from './base.controller';

export class UserController extends BaseController {
	async register(user: User) {
		return (
			await this.request()
				.url('https://test-api.k6.io/user/register/')
				.method('POST')
				.body(user)
				.got()
		).body;
	}
}
