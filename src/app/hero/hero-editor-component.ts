import {Component, FORM_DIRECTIVES, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';
import {RestoreService} from '../services/restore-service';
import {Hero} from './models/hero';

@Component({
	selector: 'hero-editor-component',
	events: ['canceled', 'saved'],
	properties: ['hero'],
	providers: [RestoreService],
	template: `
	<div>
		<span>Name:</span>
		<input [(ng-model)] = "hero.name"/>
		<div>
			<button (click)="onSaved()"> Save </button>
			<button (click)="onCanceled()"> Cancel </button>
		</div>
	</div>
	`,
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroEditorComponent {
	canceled = new EventEmitter();
	saved = new EventEmitter();

	constructor(private restoreService: RestoreService<Hero>) {
		
	}
	
	set hero(hero: Hero) {
		this.restoreService.setItem(hero);
	}
	
	get hero() {
		return this.restoreService.getItem();
	}
	
	onSaved() {
		console.log('onSaved');
		this.saved.next(this.restoreService.getItem());
	}
	
	onCanceled () {
		console.log('onCanceled');
		this.hero = this.restoreService.restoreItem();
		this.canceled.next(this.hero);
	}
}