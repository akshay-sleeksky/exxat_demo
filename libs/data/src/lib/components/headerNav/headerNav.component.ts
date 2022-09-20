import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-nav',
  styleUrls: ['./headerNav.component.css'],
  templateUrl: './headerNav.component.html',
})
export class HeaderNav {
  constructor(private route: Router) {}

  @Input() headerName = '';

  redirectTo = (site = '/associated-schools') => {
    console.log(site);
    this.route.navigate([site]);
  };
}
