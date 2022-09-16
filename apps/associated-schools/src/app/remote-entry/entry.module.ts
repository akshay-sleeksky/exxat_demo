import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderNav } from '@ng-mf/data';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolDetailComponent } from './school-detail/school.component';

@NgModule({
  declarations: [SchoolsComponent, HeaderNav],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SchoolsComponent,
      },
      {
        path: 'school',
        component: SchoolDetailComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
