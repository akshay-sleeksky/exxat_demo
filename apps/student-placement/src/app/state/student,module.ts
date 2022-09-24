import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStudent from './student/student.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
        fromStudent.PRODUCTS_FEATURE_KEY,
      fromStudent.studentReducer
    ),
    EffectsModule.forFeature([]),
  ],
  providers: []
})
export class StudentModule {}
