import {Injectable, Inject} from 'angular2/angular2';
import {Hero} from './models/hero';
import {HEROES} from './models/mock-heroes';
import {Logger} from '../providers/logger';
import {Options} from '../providers/options';
import {Config} from '../providers/config';
@Injectable()
export class HeroService {
        heroes: Hero[];
        constructor(public logger: Logger, private options: Options, @Inject('app.config') Config) {
        // constructor() {
            this.heroes = HEROES;
        }
        getHeroes() {
            // this.logger.log('Getting heroes ...'+ this.options.getName());
            this.logger.log('Getting heroes ...'+ Config.title);
            
            return this.heroes;
        }
    }
    