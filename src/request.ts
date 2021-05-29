import { OptionsOfJSONResponseBody } from 'got/dist/source/types';
import got, { Method, Response } from 'got';
import { CookieJar } from 'tough-cookie';

export class Request {
	static to(): Request {
		return new Request();
	}

	private options: OptionsOfJSONResponseBody = {
		responseType: 'json'
	};

	private cookieJar: CookieJar;

	private constructor() {
		this.cookieJar = new CookieJar();
	}

	headers(headers: Record<string, string | undefined>): this {
		this.options.headers = this.options.headers ?? {};
		this.options.headers = {
			...this.options.headers,
			...headers
		};
		return this;
	}

	url(url: string): this {
		this.options.url = url;
		return this;
	}

	method(method: Method): this {
		this.options.method = method;
		return this;
	}

	body(body: any): this {
		this.options.json = body;
		return this;
	}

	withCookies(cookiesJar: CookieJar): this {
		this.options.cookieJar = cookiesJar;
		return this;
	}

	public async getCookies() {
		return this.options.cookieJar as CookieJar;
	}

	async getHeaders() {
		return this.options.headers;
	}

	public async got<T = any>(): Promise<Response<T>> {
		try {
			return await got<T>(this.options as any);
		} catch (err) {
			console.info(`FAILED ENDPOINT: ${this.options.url}`);
			console.info(`FAILED METHOD: ${this.options.method}`);
			throw new Error(err.message);
		}
	}
}
