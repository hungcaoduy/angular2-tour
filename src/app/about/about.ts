import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import { RouterLink, APP_BASE_HREF } from 'angular2/router';
import {NameList} from './name-list';

@Component({
  selector: 'About',
  templateUrl: '/src/app/about/about.html', // May need this some day http://stackoverflow.com/questions/21103724/angular-directive-templateurl-relative-to-js-file
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
