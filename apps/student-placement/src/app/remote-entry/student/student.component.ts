import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-mf-student-placement-entry',
  styleUrls: ['./student.component.css'],
  templateUrl: './student.component.html',
})
export class RemoteEntryComponent {
  constructor(private route: Router) {}

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
}
