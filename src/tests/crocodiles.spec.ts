import { ApiClient } from '../client/api.client';
import { generateUser } from '../types/user.generator';
import * as fake from 'faker';
import { strict as assert } from 'assert';

describe('Crocodiles controller', () => {
	let api: ApiClient;

	beforeEach(async () => {
		api = await ApiClient.unregistered(generateUser());
	});

	test('can create crocodiles', async () => {
		const name = fake.name.firstName();
		const crocodile = await api.crocodile.createCrocodiles({
			name: name,
			sex: 'M',
			date_of_birth: '2020-10-15'
		});

		assert.equal(crocodile.name, name, 'Crocodile name is not same');
	});
});
