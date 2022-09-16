import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-mf-school-detail',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
})
export class SchoolDetailComponent {
  constructor(private route: Router) {}

  //   redirectTo = (site = '/associated-schools') => {
  //     this.route.navigate([site]);
  //   };
}
