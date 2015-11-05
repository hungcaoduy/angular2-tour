import {bootstrap, provide} from 'angular2/angular2';
import {HeroesComponent} from '../hero/heroes-component';
import {HeroService} from '../services/hero-service';
import {Logger} from './logger';
import {Options} from './options';
import {Config} from './config';

let heroServiceFactory = (logger: Logger, options: Options) => {
  return new HeroService(logger, options, Config);
}
let heroServiceDefinition = {
   useFactory: heroServiceFactory, 
   deps: [Logger, Options]
};

export let heroServiceProvider = provide(HeroService, heroServiceDefinition);
