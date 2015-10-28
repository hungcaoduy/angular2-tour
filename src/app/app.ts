import {bootstrap, provide} from 'angular2/angular2';
import {HeroesComponent} from './hero/hero-component';
import {HeroService} from './hero/hero-service';

import {Logger} from './logger';
// bootstrap(HeroesComponent, [HeroService]);
// bootstrap(HeroesComponent, [provide(HeroService, {useClass:HeroService})]);


let heroServiceFactory = (logger: Logger) => {
  return new HeroService(logger);
}
let heroServiceDefinition = {
   useFactory: heroServiceFactory, 
   deps: [Logger]
};

let heroServiceProvider = provide(HeroService, heroServiceDefinition);
bootstrap(HeroesComponent, [heroServiceProvider, Logger]);