import { OptionsOfJSONResponseBody } from 'got/dist/source/types';
import got, { Method, Response } from 'got';

export class Request {
	static to(): Request {
		return new Request();
	}

	private constructor() {}

	private options: OptionsOfJSONResponseBody = {
		responseType: 'json'
	};

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

	public async got<T = any>(): Promise<Response<T>> {
		return got<T>(this.options as any);
	}
}
