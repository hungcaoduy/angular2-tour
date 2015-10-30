import {Injectable} from 'angular2/angular2';
@Injectable()
export class Logger {
	log (message) {
		console.log(message);
	};
}