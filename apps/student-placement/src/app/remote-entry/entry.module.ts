import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-detail/student-detail.component';
import { HeaderNav } from '@ng-mf/data';
import { studentReducer } from '../state/student/student.reducer';
import { StudentModule } from '../state/student,module';

@NgModule({
  declarations: [StudentComponent, StudentDetailsComponent, HeaderNav],
  imports: [
    CommonModule,
    StudentModule,
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
