import { User } from '../types/user.type';
import { generateUser } from '../types/user.generator';
import { ApiClient } from '../client/api.client';

describe('User controller', () => {
	let user: User;
	let api: ApiClient;

	beforeEach(async () => {
		user = generateUser();
		await ApiClient.unregistered(user);
	});

	test('should register user', async () => {
		console.log(user);
	});
});
