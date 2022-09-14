import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

interface Tabs {
  icon : string,
  src : string,
  header : string,
  content : string,
  color : string
}

@Component({
  selector: 'ng-mf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(private route:Router) { }

  array : number[] = [1,2,3,4,5];

  tabs : Tabs[] = [
    {
      icon : "assets/icons/Profile_icon.svg",
      src : "associated-schools",
      header : "Profile",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.",
      color : "border-orange-300"
    },
    {
      icon : "assets/icons/Associated_school_icon.svg",
      src : "associated-schools",
      header : "Associated School",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.",
      color : "border-green-300"
    },
    {
      icon : "assets/icons/Locations_icon.svg",
      src : "associated-schools",
      header : "Locations",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.",
      color : "border-green-600"
    },
    {
      icon : "assets/icons/Manage_avail_icon.svg",
      src : "associated-schools",
      header : "Manage Availability",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.",
      color : "border-purple-600"
    },
    {
      icon : "assets/icons/Student_placement_icon.svg",
      src : "associated-schools",
      header : "Student Placements",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.",
      color : "border-blue-300"
    },
  ];

  redirectTo = ( site = '/associated-schools') =>{
    this.route.navigate([site]);
  }
  ngOnInit(): void {}

}
