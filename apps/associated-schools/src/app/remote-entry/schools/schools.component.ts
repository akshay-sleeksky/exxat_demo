import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-mf-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css'],
})
export class SchoolsComponent {
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
      siteName: 'Sahuarita pRIMARY Schools:Lorri Andrews',
      siteAddress: '1901 Thorridge Cir. Shiloh, Hawai 81063',
    },
    {
      name: 'Allen College PT',
      address: '4140 Parker Rd. Allentown',
      siteName: 'Sahuarita pRIMARY Schools:Lorri Andrews',
      siteAddress: '1901 Thorridge Cir. Shiloh, Hawai 81063',
    },
  ];

  redirectTo = (site = '/school') => {
    this.route.navigate([site]);
  };
}
