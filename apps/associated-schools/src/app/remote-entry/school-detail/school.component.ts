import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-mf-school-detail',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
})
export class SchoolDetailComponent {
  constructor(private route: Router) {}

  dataArray = [
    {
      key: 'Alias Name',
      value: 'Name of the Alias',
    },
    {
      key: 'Address',
      value: '1901 Thorridge Cir. Shiloh, Hawai 81063',
    },
    {
      key: 'Phone Number',
      value: '9753124680',
    },
    {
      key: 'Website',
      value: 'https://www.google.com/',
    },
    {
      key: 'EIN',
      value: '87247810',
    },
    {
      key: 'FAX',
      value: '9876543210',
    },
    {
      key: 'Total locations',
      value: '53',
    },
  ];
}
