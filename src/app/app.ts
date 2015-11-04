import {Component, ViewEncapsulation, bind, bootstrap, provide} from 'angular2/angular2';
import {HeroesComponent} from './hero/heroes-component';
import {AboutComponent} from './about/about';
import {Logger} from './providers/logger';
import {Options} from './providers/options'
import {heroServiceProvider} from './providers/hero-service-provider';

import {RouteConfig, 
		RouterLink, 
		RouterOutlet, 
		ROUTER_DIRECTIVES, 
		ROUTER_PROVIDERS, PathLocationStrategy,
		APP_BASE_HREF} from 'angular2/router';

@Component({
	selector: 'App',
	template: `
	<h1>My app start here</h1>
	<nav>
		<a [router-link]="['/Heroes']" id="heroes-link">Heroes</a>
		<a [router-link]="['/About']" id="about-link">About</a>
	</nav>
	<router-outlet></router-outlet>
	`	,
	encapsulation: ViewEncapsulation.None,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/heroes', component: HeroesComponent, as: 'Heroes' },
  { path: '/about', component: AboutComponent, as: 'About' }
])
class AppComponent {}

bootstrap(AppComponent, [
	ROUTER_PROVIDERS, 
	PathLocationStrategy,
	provide(APP_BASE_HREF, {useValue: '/src/app'}),
	heroServiceProvider,
	Logger,
	Options
	]);
// bootstrap(HeroesComponent, [heroServiceProvider, Logger, Options]);
