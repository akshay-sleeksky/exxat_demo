import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Tabs {
  icon: string;
  src: string;
  header: string;
  content: string;
  color: string;
  textColor: string;
  notification: number;
}


@Component({
  selector: 'ng-mf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {}

  array: number[] = [1, 2, 3, 4, 5];

  tabs: Tabs[] = [
    {
      icon: 'assets/icons/Profile_icon.svg',
      src: 'associated-schools',
      header: 'Profile',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.',
      color: 'border-orange-300',
      textColor: 'text-orange-300',
      notification: 0,
    },
    {
      icon: 'assets/icons/Associated_school_icon.svg',
      src: 'associated-schools',
      header: 'Associated School',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.',
      color: 'border-green-300',
      textColor: 'text-green-300',
      notification: 4,
    },
    {
      icon: 'assets/icons/Locations_icon.svg',
      src: 'associated-schools',
      header: 'Locations',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.',
      color: 'border-green-600',
      textColor: 'text-green-600',
      notification: 0,
    },
    {
      icon: 'assets/icons/Manage_avail_icon.svg',
      src: 'associated-schools',
      header: 'Manage Availability',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.',
      color: 'border-purple-600',
      textColor: 'text-purple-600',
      notification: 0,
    },
    {
      icon: 'assets/icons/Student_placement_icon.svg',
      src: 'student-placement',
      header: 'Student Placements',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.',
      color: 'border-blue-300',
      textColor: 'text-blue-300',
      notification: 5,
    },
  ];

  redirectTo = (site = '/associated-schools') => {
    console.log(site);
    this.route.navigate([site]);
  };
  ngOnInit(): void {}
}
