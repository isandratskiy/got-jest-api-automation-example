import { generateUser } from '../types/user.generator';
import { ApiClient } from '../client/api.client';
import { User } from '../types/user.type';

describe('User controller', () => {
	let api: ApiClient;
	let user: User;

	beforeEach(async () => {
		user = await ApiClient.register(generateUser());
	});

	test('should auth by cookies', async () => {
		api = await ApiClient.authCookies(user);
	});

	test('should auth by token', async () => {
		api = await ApiClient.authToken(user);
	});
});