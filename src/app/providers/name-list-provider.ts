import {provide} from 'angular2/angular2';
import {NameList} from '../about/name-list';
let nameListFactory = () => {
	return new NameList();
}
let nameListDefinition = {
	useFactory: nameListFactory
}
export let nameListProvider = provide(NameList, nameListDefinition);