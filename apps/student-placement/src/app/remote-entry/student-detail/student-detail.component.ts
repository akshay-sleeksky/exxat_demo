import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INIT_STUDENT } from '../../state/student/student.actions';
import { Student } from '../../state/student/student.model';
import { selectStudent } from '../../state/student/student.selectors';

@Component({
  selector: 'ng-mf-student-detail',
  styleUrls: ['./student-detail.component.css'],
  templateUrl: './student-detail.component.html',
})
export class StudentDetailsComponent {
  constructor(private route: Router, private store: Store) {}

  readonly student$ : Observable<ReadonlyArray<Student>> =  this.store.select(selectStudent);

  log = (val : any) => { console.log(val); }

  rows = [
    {
      name: 'A.T. Still University',
      address: '2972 Westheimer Rd. Santa Ana, Illinois 85456',
      siteName:
        'Dignity Health Barrow Cleft and Craniofacial Center: Kelly Nett Cordero',
      siteAddress: '4140 Parker Rd. Allentown, New Mexico 31134',
    },
    {
      name: 'Abeilene Christian University',
      address: '4140 Parker Rd. Allentown, New Mexico 31134',
      siteName: 'Sahuarita Primary Schools:Lorri Andrews',
      siteAddress: '1901 Thorridge Cir. Shiloh, Hawai 81063',
    },
    {
      name: 'Allen College PT',
      address: '4140 Parker Rd. Allentown',
      siteName: 'Sahuarita Primary Schools:Lorri Andrews',
      siteAddress: '1901 Thorridge Cir. Shiloh, Hawai 81063',
    },
    {
      name: 'A.T. Still University',
      address: '2972 Westheimer Rd. Santa Ana, Illinois 85456',
      siteName:
        'Dignity Health Barrow Cleft and Craniofacial Center: Kelly Nett Cordero',
      siteAddress: '4140 Parker Rd. Allentown, New Mexico 31134',
    },
    {
      name: 'Abeilene Christian University',
      address: '4140 Parker Rd. Allentown, New Mexico 31134',
      siteName: 'Sahuarita Primary Schools:Lorri Andrews',
      siteAddress: '1901 Thorridge Cir. Shiloh, Hawai 81063',
    },
    {
      name: 'Allen College PT',
      address: '4140 Parker Rd. Allentown',
      siteName: 'Sahuarita Primary Schools:Lorri Andrews',
      siteAddress: '1901 Thorridge Cir. Shiloh, Hawai 81063',
    },
    {
      name: 'A.T. Still University',
      address: '2972 Westheimer Rd. Santa Ana, Illinois 85456',
      siteName:
        'Dignity Health Barrow Cleft and Craniofacial Center: Kelly Nett Cordero',
      siteAddress: '4140 Parker Rd. Allentown, New Mexico 31134',
    },
    {
      name: 'Abeilene Christian University',
      address: '4140 Parker Rd. Allentown, New Mexico 31134',
      siteName: 'Sahuarita Primary Schools:Lorri Andrews',
      siteAddress: '1901 Thorridge Cir. Shiloh, Hawai 81063',
    },
    {
      name: 'Allen College PT',
      address: '4140 Parker Rd. Allentown',
      siteName: 'Sahuarita Primary Schools:Lorri Andrews',
      siteAddress: '1901 Thorridge Cir. Shiloh, Hawai 81063',
    },
  ];

  redirectTo = (site = '/associated-schools') => {
    console.log(site);
    this.route.navigate([site]);
  };

  ngOnInit() {
    this.store.dispatch(INIT_STUDENT({ payload : [{ id: 1, name : 'Akshay' }] }));
  }
}
