var angular2_1 = require('angular2/angular2');
var hero_component_1 = require('./hero/hero-component');
var hero_service_1 = require('./hero/hero-service');
var logger_1 = require('./logger');
// bootstrap(HeroesComponent, [HeroService]);
// bootstrap(HeroesComponent, [provide(HeroService, {useClass:HeroService})]);
var heroServiceFactory = function (logger) {
    return new hero_service_1.HeroService(logger);
};
var heroServiceDefinition = {
    useFactory: heroServiceFactory,
    deps: [logger_1.Logger]
};
var heroServiceProvider = angular2_1.provide(hero_service_1.HeroService, heroServiceDefinition);
angular2_1.bootstrap(hero_component_1.HeroesComponent, [heroServiceProvider, logger_1.Logger]);
//# sourceMappingURL=app.js.map