var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var hero_1 = require('./models/hero');
var hero_service_1 = require('./hero-service');
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.title = 'Tour of heroes.';
        this.temp = '';
        this.heroes = heroService.getHeroes();
    }
    HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    HeroesComponent.prototype.getSelectedClass = function (hero) { return { 'selected': hero === this.selectedHero }; };
    HeroesComponent.prototype.onKey = function (event) {
        //this.temp += event.target.value + " | ";
    };
    HeroesComponent.prototype.addHero = function (newHero) {
        var aNewHero = new hero_1.Hero();
        aNewHero.id = 101;
        aNewHero.name = newHero.value;
        this.heroes.push(aNewHero);
    };
    HeroesComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            //template: '
            //'
            templateUrl: 'app/hero/hero-list.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            // styles:[`
            //         `]
            styleUrls: ['app/hero/hero-list.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
})();
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=hero-component.js.map