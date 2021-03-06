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
var HeroCardComponent = (function () {
    function HeroCardComponent() {
    }
    HeroCardComponent = __decorate([
        angular2_1.Component({
            selector: 'hero-card-component',
            properties: ['hero'],
            template: "\n\t<div>\n\t\t<span> Name: </span>\n\t\t<span> {{hero.name}} </span>\n\t</div>\n\t",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroCardComponent);
    return HeroCardComponent;
})();
exports.HeroCardComponent = HeroCardComponent;
//# sourceMappingURL=hero-card-component.js.map