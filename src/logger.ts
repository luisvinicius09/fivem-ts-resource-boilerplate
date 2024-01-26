export default class Logger {
	constructor() {}

	log(message: string) {
		console.log(message);
	}
}


export function helperLogger() {
	console.log('gets here')
}