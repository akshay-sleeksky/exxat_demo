import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectStudent } from './state/student/student.selectors';

@Component({
  selector: 'ng-mf-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {


  constructor(
    
  ) {}
}
