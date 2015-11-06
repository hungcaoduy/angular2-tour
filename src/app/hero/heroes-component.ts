import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './models/hero';
import {HeroService} from '../services/hero-service';
import {HeroCardComponent} from './hero-card-component';
import {HeroEditorComponent} from './hero-editor-component';
import {AboutComponent} from '../about/about';

//
import {Logger} from '../providers/logger';
import {Options} from '../providers/options'
import {heroServiceProvider} from '../providers/hero-service-provider';
// bootstrap(HeroesComponent, [heroServiceProvider, Logger, Options]);
//
import {RouteConfig, 
		RouterLink, 
		RouterOutlet, 
		ROUTER_DIRECTIVES, 
		ROUTER_PROVIDERS, PathLocationStrategy,
		RouteParams, APP_BASE_HREF} from 'angular2/router';


@Component({
    templateUrl: '/src/app/hero/views/hero-detail.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class HeroDetailComponent {
    name: string;
    constructor(params: RouteParams) {
        this.name = params.get('name');
    }
}


@Component({
    selector: 'Heroes',
    //template: '
    //'
    templateUrl: '/src/app/hero/views/heroes.html', //this is a bit tricky, why ./hero-list.html does not work
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, HeroCardComponent, HeroEditorComponent],
    // styles:[`
    //         `]
    styleUrls: ['/src/app/hero/views/hero-list.css']
})
@RouteConfig([
  { path: '/heroes/:name', component: HeroDetailComponent, as: 'HeroDetail' },
])

export class HeroesComponent { 
    public title = 'Tour of heroes.';
    // public heroes: Hero[];
    public heroes: EditItem<Hero>[];
    public selectedHero : Hero;
    constructor(heroService: HeroService) {
        this.heroes = heroService.getHeroes()
            .map(item => new EditItem(item));
    } 

    onSaved(editItem: EditItem<Hero>, updatedHero: Hero) {
        editItem.item = updatedHero;
        editItem.editing = false;
    }
    
    onCanceled(editItem: EditItem<Hero>) {
        editItem.editing = false;
    }
}
class EditItem<T> {
    item: T;
    editing: boolean;
    constructor(public anItem: T) { 
        this.item = anItem;
    }
}