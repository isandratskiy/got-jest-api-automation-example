export class BaseController {
	constructor(protected readonly headers: { Authorization?: string }) {}
}
