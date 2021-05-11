import { User } from '../types/user.type';
import { Request } from '../request';
import { BaseController } from './base.controller';

export class UserController extends BaseController {
	async register(user: User) {
		return (
			await Request.to()
				.url('https://test-api.k6.io/user/register/')
				.headers(this.headers)
				.method('POST')
				.body(user)
				.got()
		).body;
	}
}
