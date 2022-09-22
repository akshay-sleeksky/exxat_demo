import {  createFeatureSelector } from '@ngrx/store';
import { Student } from './student.model';
 
// export const selectStudent = createFeatureSelector<ReadonlyArray<Student>>('student');

// export const selectTodos = (state: AppState) => state.student;
// export const selectStudent = createSelector(
//     selectTodos,
//     (state: StudentState) => state.student 
//   );

export const selectStudent = createFeatureSelector<ReadonlyArray<Student>>('student');
