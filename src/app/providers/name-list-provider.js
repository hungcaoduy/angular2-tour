var angular2_1 = require('angular2/angular2');
var name_list_1 = require('../about/name-list');
var nameListFactory = function () {
    return new name_list_1.NameList();
};
var nameListDefinition = {
    useFactory: nameListFactory
};
exports.nameListProvider = angular2_1.provide(name_list_1.NameList, nameListDefinition);
//# sourceMappingURL=name-list-provider.js.map