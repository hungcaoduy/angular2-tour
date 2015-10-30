import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './models/hero';
import {HeroService} from './hero-service';
import {HeroCardComponent} from './hero-card-component';
import {HeroEditorComponent} from './hero-editor-component';

@Component({
    selector: 'my-app',
    //template: '
    //'
    templateUrl: 'app/hero/views/heroes.html', //this is a bit tricky, why ./hero-list.html does not work
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, HeroCardComponent, HeroEditorComponent],
    // styles:[`
    //         `]
    styleUrls: ['app/hero/views/hero-list.css']
})

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