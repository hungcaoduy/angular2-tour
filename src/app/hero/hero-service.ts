import {Injectable} from 'angular2/angular2';
import {Hero} from './models/hero';
import {HEROES} from './models/mock-heroes';
import {Logger} from '../logger';
@Injectable()
export class HeroService {
        heroes: Hero[];
        // constructor(public logger: Logger) {
        constructor() {
            this.heroes = HEROES;
        }
        getHeroes() {
            // this.logger.log('Getting heroes ...');
            return this.heroes;
        }
    }
    