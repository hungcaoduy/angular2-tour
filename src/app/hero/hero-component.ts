import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './models/hero';
import {HeroService} from './hero-service';

@Component({
    selector: 'my-app',
    //template: '
    //'
    templateUrl: 'app/hero/views/hero-list.html', //this is a bit tricky, why ./hero-list.html does not work
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    // styles:[`
    //         `]
    styleUrls: ['app/hero/views/hero-list.css']
})

export    class HeroesComponent { 
    public title = 'Tour of heroes.';
    // public hero : Hero = {id: 1, name: 'windstorm'} ;
    // public heroes = HEROES;
    public heroes: Hero[];
    public selectedHero : Hero;
    constructor(heroService: HeroService) {
        this.heroes = heroService.getHeroes();
    } 
    onSelect(hero: Hero) {this.selectedHero = hero; }
    getSelectedClass(hero: Hero) { return {'selected': hero === this.selectedHero}; }

    public temp = '';
    onKey(event) {
        //this.temp += event.target.value + " | ";
    }
    addHero(newHero) {
        let aNewHero = new Hero();
        aNewHero.id = 111;
        aNewHero.name = newHero.value; 
        this.heroes.push(aNewHero);
    }
}


