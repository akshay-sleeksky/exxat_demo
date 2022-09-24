import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFacade, ProductsEntity} from '@ng-mf/products';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
  selector: 'ng-mf-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private route: Router, private store : Store, private productFacade : ProductFacade) {}

  array: number[] = [1, 2, 3, 4, 5];
  readonly productLoaded$ : Observable<boolean> = this.productFacade.productLoaded$;
  readonly allProducts$ : Observable<ProductsEntity[]> =  this.productFacade.allProducts$;

  log( value : any ){
    console.log(value);
  }

  tabs: Tabs[] = [
    {
      icon: 'assets/Profile_icon.svg',
      src: '/',
      header: 'Profile',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.',
      color: 'border-orange-300',
      textColor: 'text-orange-300',
      notification: 0,
    },
    {
      icon: 'assets/Associated_school_icon.svg',
      src: 'associated-schools',
      header: 'Associated School',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.',
      color: 'border-green-300',
      textColor: 'text-green-300',
      notification: 4,
    },
    {
      icon: 'assets/Locations_icon.svg',
      src: '/',
      header: 'Locations',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.',
      color: 'border-green-600',
      textColor: 'text-green-600',
      notification: 0,
    },
    {
      icon: 'assets/Manage_avail_icon.svg',
      src: '/',
      header: 'Manage Availability',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.',
      color: 'border-purple-600',
      textColor: 'text-purple-600',
      notification: 0,
    },
    {
      icon: 'assets/Student_placement_icon.svg',
      src: 'student-placement',
      header: 'Student Placements',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris consectetur vulputate aenean in enim ultrices.',
      color: 'border-blue-300',
      textColor: 'text-blue-300',
      notification: 5,
    },
    {
      icon: 'assets/Student_placement_icon.svg',
      src: 'todoapp',
      header: 'Todo App',
      content: 'Todo App that is using NgRx',
      color: 'border-blue-300',
      textColor: 'text-blue-300',
      notification: 0,
    },
  ];

  redirectTo = (site = '/associated-schools') => {
    console.log(site);
    this.route.navigate([site]);
  };

  ngOnInit() {
    this.productFacade.initProducts();
    // this.productFacade.addProducts({ products : [
    //   {"id":4,"name":"Jat","roll_number":1018},
    //   {"id":5,"name":"Mohan","roll_number":1020},
    //   {"id":6,"name":"Mishra","roll_number":1022}] })
  }
}
