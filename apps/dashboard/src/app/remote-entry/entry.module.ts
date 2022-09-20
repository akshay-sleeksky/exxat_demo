import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { HeaderNav } from '@ng-mf/data';

@NgModule({
  declarations: [DashboardComponent, HeaderNav],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
  ],
  providers: [],
  exports: [DashboardComponent],
})
export class RemoteEntryModule {}
