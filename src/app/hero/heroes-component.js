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
var hero_service_1 = require('../services/hero-service');
var hero_card_component_1 = require('./hero-card-component');
var hero_editor_component_1 = require('./hero-editor-component');
// bootstrap(HeroesComponent, [heroServiceProvider, Logger, Options]);
//
var router_1 = require('angular2/router');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(params) {
        this.name = params.get('name');
    }
    HeroDetailComponent = __decorate([
        angular2_1.Component({
            templateUrl: '/src/app/hero/views/hero-detail.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams])
    ], HeroDetailComponent);
    return HeroDetailComponent;
})();
exports.HeroDetailComponent = HeroDetailComponent;
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.title = 'Tour of heroes.';
        this.heroes = heroService.getHeroes()
            .map(function (item) { return new EditItem(item); });
    }
    HeroesComponent.prototype.onSaved = function (editItem, updatedHero) {
        editItem.item = updatedHero;
        editItem.editing = false;
    };
    HeroesComponent.prototype.onCanceled = function (editItem) {
        editItem.editing = false;
    };
    HeroesComponent = __decorate([
        angular2_1.Component({
            selector: 'Heroes',
            //template: '
            //'
            templateUrl: '/src/app/hero/views/heroes.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, hero_card_component_1.HeroCardComponent, hero_editor_component_1.HeroEditorComponent],
            // styles:[`
            //         `]
            styleUrls: ['/src/app/hero/views/hero-list.css']
        }),
        router_1.RouteConfig([
            { path: '/heroes/:name', component: HeroDetailComponent, as: 'HeroDetail' },
        ]), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
})();
exports.HeroesComponent = HeroesComponent;
var EditItem = (function () {
    function EditItem(anItem) {
        this.anItem = anItem;
        this.item = anItem;
    }
    return EditItem;
})();
//# sourceMappingURL=heroes-component.js.map