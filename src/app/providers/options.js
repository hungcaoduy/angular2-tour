var Options = (function () {
    function Options() {
        this.name = '';
    }
    Options.prototype.getName = function () {
        return name || 'name';
    };
    return Options;
})();
exports.Options = Options;
// export let optionsProvider = provide(Options, {useValue: {}}); 
//# sourceMappingURL=options.js.map