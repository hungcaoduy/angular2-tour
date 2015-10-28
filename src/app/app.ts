import {bootstrap} from 'angular2/angular2';
import {HeroesComponent} from './hero/hero-component';
import {HeroService} from './hero/hero-service';

bootstrap(HeroesComponent, [HeroService]);
