import {  createAction, props } from "@ngrx/store";
import { Student } from "./student.model";

// export const ADD_STUDENT = '[Student] ADD_STUDENT';
export const ADD_STUDENT = createAction(
    '[Student] ADD_STUDENT',
    props<{ payload : Student }>()
);

// export class AddStudent implements Action{
//     readonly type = ADD_STUDENT;

//     constructor(public  payload : Student ) {}
// }


// export type All = ADD_STUDENT;