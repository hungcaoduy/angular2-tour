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
var heroes_component_1 = require('./hero/heroes-component');
var about_1 = require('./about/about');
var logger_1 = require('./providers/logger');
var options_1 = require('./providers/options');
var hero_service_provider_1 = require('./providers/hero-service-provider');
var name_list_provider_1 = require('./providers/name-list-provider');
var router_1 = require('angular2/router');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'App',
            template: "\n\t<h1>My app start here</h1>\n\t<nav>\n\t\t<a [router-link]=\"['./Heroes']\" id=\"heroes-link\">Heroes</a>\n\t\t<a [router-link]=\"['./About']\" id=\"about-link\">About</a>\n\t</nav>\n\t<router-outlet></router-outlet>\n\t",
            encapsulation: angular2_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet]
        }),
        router_1.RouteConfig([
            { path: '/heroes', component: heroes_component_1.HeroesComponent, as: 'Heroes' },
            { path: '/about', component: about_1.AboutComponent, as: 'About' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [
    router_1.ROUTER_PROVIDERS,
    router_1.PathLocationStrategy,
    angular2_1.provide(router_1.APP_BASE_HREF, { useValue: '/src/app' }),
    hero_service_provider_1.heroServiceProvider,
    logger_1.Logger,
    options_1.Options,
    name_list_provider_1.nameListProvider
]);
//# sourceMappingURL=app.js.map