import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-nav',
  styleUrls: ['./headerNav.component.css'],
  templateUrl: './headerNav.component.html',
})
export class HeaderNav {
  constructor(private route: Router) {}

  redirectTo = (site = '/associated-schools') => {
    console.log(site);
    this.route.navigate([site]);
  };
}
