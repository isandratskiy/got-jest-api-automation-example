import { BaseController } from './base.controller';
import { Request } from '../request';
import { Crocodile } from '../types/crocodile.type';

export class CrocodilesController extends BaseController {
	async createCrocodiles(crocodile: Crocodile) {
		return (
			await Request.to()
				.url('https://test-api.k6.io/my/crocodiles/')
				.headers(this.headers)
				.method('POST')
				.body(crocodile)
				.got<Crocodile>()
		).body;
	}
}
