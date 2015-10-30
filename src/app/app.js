var angular2_1 = require('angular2/angular2');
var heroes_component_1 = require('./hero/heroes-component');
var logger_1 = require('./providers/logger');
var options_1 = require('./providers/options');
var hero_service_provider_1 = require('./providers/hero-service-provider');
angular2_1.bootstrap(heroes_component_1.HeroesComponent, [hero_service_provider_1.heroServiceProvider, logger_1.Logger, options_1.Options]);
//# sourceMappingURL=app.js.map