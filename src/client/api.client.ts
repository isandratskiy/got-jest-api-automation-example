import { UserController } from '../controller/user.controller';
import { AuthController } from '../controller/auth.controller';
import { User } from '../types/user.type';
import { CrocodilesController } from '../controller/crocodiles.controller';

export class ApiClient {
	public readonly user: UserController;
	public readonly auth: AuthController;
	public readonly crocodile: CrocodilesController;

	private constructor(token?: string) {
		const headers = {
			...(token ? { Authorization: `Bearer ${token}` } : {})
		};

		this.user = new UserController(headers);
		this.auth = new AuthController(headers);
		this.crocodile = new CrocodilesController(headers);
	}

	static async unauthorized(user: User) {
		return new ApiClient(await new ApiClient().auth.login(user));
	}

	static async unregistered(user: User) {
		await new ApiClient().user.register(user);
		return await ApiClient.unauthorized(user);
	}
}
