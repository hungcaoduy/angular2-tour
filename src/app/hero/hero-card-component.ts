import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './models/hero';

@Component({
	selector: 'hero-card-component',
	properties: ['hero'],
	template: `
	<div>
		<span> Name: </span>
		<span> {{hero.name}} </span>
	</div>
	`,
	directives: [CORE_DIRECTIVES]
})
export class HeroCardComponent{
	hero: Hero;
}