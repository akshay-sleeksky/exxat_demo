import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './student/student.component';
import { StudentDetails } from './student-detail/student.component';
import { HeaderNav } from '@ng-mf/data';

@NgModule({
  declarations: [RemoteEntryComponent,HeaderNav],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'detail',
        component: StudentDetails,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
