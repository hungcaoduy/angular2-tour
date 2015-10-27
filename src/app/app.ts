    import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
    @Component({
        selector: 'my-app',
        template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <input #new-hero (keyup.enter)="addHero(newHero)">
        <button (click)=addHero(newHero)>Add</button>
        <ul class="heroes">
        <li *ng-for="#hero of heroes"
            [ng-class] = "getSelectedClass(hero)" 
            (click)="onSelect(hero)">
            <span class = "badge"> {{hero.id}} </span> 
            <input [(ng-model)] = "hero.name" (keyup)="onKey($event)">
                             
        </li>
        </ul>
        <div *ng-if = "selectedHero">
            <h2>Hero I selected: {{selectedHero.name}}</h2>
            values: {{temp}}
        </div>
        `,
        directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
        styles:[`
                .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
                .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
                .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
                .heroes .badge {
                    font-size: small;
                    color: white;
                    padding: 0.1em 0.7em;
                    background-color: #369;
                    line-height: 1em;
                    position: relative;
                    left: -1px;
                    top: -1px;
                }
                .selected { background-color: #EEE; color: #369; }
                `]
    })

    class HeroesListComponent { 
        public title = 'Tour of heroes.';
        // public hero : Hero = {id: 1, name: 'windstorm'} ;
        // public heroes = HEROES; 
        public heroes = new HeroService().getHeroes();
        public selectedHero : Hero;
        onSelect(hero: Hero) {this.selectedHero = hero; }
        getSelectedClass(hero: Hero) { return {'selected': hero === this.selectedHero}; }

        public temp = '';
        onKey(event) {
            //this.temp += event.target.value + " | ";
        }
        addHero(newHero) {
            let aNewHero = new Hero();
            aNewHero.id = 101;
            aNewHero.name = newHero.value; 
            this.heroes.push(aNewHero);
        }
    }

    bootstrap(HeroesListComponent);
    
    class HeroService {
        heroes: Hero[];
        constructor() {
            this.heroes = HEROES;
        }
        getHeroes() {
            return this.heroes;
        }
    }

    class Hero {
        id: number;
        name: string;
    } 
    
    var HEROES: Hero[] = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }        
    ];
    