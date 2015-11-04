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
var restore_service_1 = require('./restore-service');
var HeroEditorComponent = (function () {
    function HeroEditorComponent(restoreService) {
        this.restoreService = restoreService;
        this.canceled = new angular2_1.EventEmitter();
        this.saved = new angular2_1.EventEmitter();
    }
    Object.defineProperty(HeroEditorComponent.prototype, "hero", {
        get: function () {
            return this.restoreService.getItem();
        },
        set: function (hero) {
            this.restoreService.setItem(hero);
        },
        enumerable: true,
        configurable: true
    });
    HeroEditorComponent.prototype.onSaved = function () {
        console.log('onSaved');
        this.saved.next(this.restoreService.getItem());
    };
    HeroEditorComponent.prototype.onCanceled = function () {
        console.log('onCanceled');
        this.hero = this.restoreService.restoreItem();
        this.canceled.next(this.hero);
    };
    HeroEditorComponent = __decorate([
        angular2_1.Component({
            selector: 'hero-editor-component',
            events: ['canceled', 'saved'],
            properties: ['hero'],
            providers: [restore_service_1.RestoreService],
            template: "\n\t<div>\n\t\t<span>Name:</span>\n\t\t<input [(ng-model)] = \"hero.name\"/>\n\t\t<div>\n\t\t\t<button (click)=\"onSaved()\"> Save </button>\n\t\t\t<button (click)=\"onCanceled()\"> Cancel </button>\n\t\t</div>\n\t</div>\n\t",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [restore_service_1.RestoreService])
    ], HeroEditorComponent);
    return HeroEditorComponent;
})();
exports.HeroEditorComponent = HeroEditorComponent;
//# sourceMappingURL=hero-editor-component.js.map