import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-detail/student-detail.component';
import { HeaderNav } from '@ng-mf/data';

@NgModule({
  declarations: [StudentComponent, StudentDetailsComponent, HeaderNav],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentComponent,
      },
      {
        path: 'detail',
        component: StudentDetailsComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
