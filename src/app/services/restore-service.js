var RestoreService = (function () {
    function RestoreService() {
    }
    RestoreService.prototype.setItem = function (item) {
        this.originalItem = item;
        this.currentItem = this.clone(item);
    };
    RestoreService.prototype.getItem = function () {
        return this.currentItem;
    };
    RestoreService.prototype.restoreItem = function () {
        this.currentItem = this.originalItem;
        return this.getItem();
    };
    RestoreService.prototype.clone = function (item) {
        // super poor clone implementation
        // return JSON.parse(JSON.stringify(item));
        return item;
    };
    return RestoreService;
})();
exports.RestoreService = RestoreService;
//# sourceMappingURL=restore-service.js.map