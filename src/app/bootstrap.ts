import {bind, bootstrap, provide} from 'angular2/angular2';
import {HeroesComponent} from './hero/heroes-component';
import {Logger} from './providers/logger';
import {Options} from './providers/options'
import {heroServiceProvider} from './providers/hero-service-provider';

// bootstrap(HeroesComponent);
bootstrap(HeroesComponent, [heroServiceProvider, Logger, Options]);
