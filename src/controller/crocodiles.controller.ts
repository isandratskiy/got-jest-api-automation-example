import { BaseController } from './base.controller';
import { Crocodile } from '../types/crocodile.type';

export class CrocodilesController extends BaseController {
	async createCrocodiles(crocodile: Crocodile) {
		return (
			await this.request()
				.url('https://test-api.k6.io/my/crocodiles/')
				.method('POST')
				.body(crocodile)
				.got<Crocodile>()
		).body;
	}

	async getCrocodiles() {
		return (
			await this.request()
				.url('https://test-api.k6.io/my/crocodiles/')
				.method('GET')
				.got()
		).body;
	}
}
