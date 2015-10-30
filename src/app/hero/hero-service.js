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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var mock_heroes_1 = require('./models/mock-heroes');
var logger_1 = require('../providers/logger');
var options_1 = require('../providers/options');
var config_1 = require('../providers/config');
var HeroService = (function () {
    function HeroService(logger, options, Config) {
        this.logger = logger;
        this.options = options;
        // constructor() {
        this.heroes = mock_heroes_1.HEROES;
    }
    HeroService.prototype.getHeroes = function () {
        // this.logger.log('Getting heroes ...'+ this.options.getName());
        this.logger.log('Getting heroes ...' + config_1.Config.title);
        return this.heroes;
    };
    HeroService = __decorate([
        angular2_1.Injectable(),
        __param(2, angular2_1.Inject('app.config')), 
        __metadata('design:paramtypes', [logger_1.Logger, options_1.Options, Object])
    ], HeroService);
    return HeroService;
})();
exports.HeroService = HeroService;
//# sourceMappingURL=hero-service.js.map