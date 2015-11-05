var angular2_1 = require('angular2/angular2');
var hero_service_1 = require('../services/hero-service');
var logger_1 = require('./logger');
var options_1 = require('./options');
var config_1 = require('./config');
var heroServiceFactory = function (logger, options) {
    return new hero_service_1.HeroService(logger, options, config_1.Config);
};
var heroServiceDefinition = {
    useFactory: heroServiceFactory,
    deps: [logger_1.Logger, options_1.Options]
};
exports.heroServiceProvider = angular2_1.provide(hero_service_1.HeroService, heroServiceDefinition);
//# sourceMappingURL=hero-service-provider.js.map