import {provide} from 'angular2/angular2';

export class Options {
  private name = '';
  public getName() {
    return name || 'name';
  }
 
}

// export let optionsProvider = provide(Options, {useValue: {}});