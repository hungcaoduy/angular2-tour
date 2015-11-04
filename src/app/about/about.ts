import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import {NameList} from '../providers/name_list';

@Component({
  selector: 'About',
  templateUrl: 'app/about/about.html',
  directives: [CORE_DIRECTIVES]
})
export class AboutComponent {
  constructor(public list: NameList) {}
  addName(newname): boolean {
    this.list.add(newname.value);
    newname.value = '';
    // prevent default form submit behavior to refresh the page
    return false;
  }
}
