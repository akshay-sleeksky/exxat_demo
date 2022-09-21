import { createReducer, on } from '@ngrx/store';
import * as StudentActions from './student.actions';
import { Student } from './student.model';

const defaultState : Student[] = [];



// export function studentReducer ( state : Student[] = defaultState, action : Action  ){
//     console.log(action.type, state);

//     switch(action.type){
//         case StudentActions.ADD_STUDENT : 
//             return [...state, action.payload]
//         default :
//             return state;
//     }
// }

export const studentReducer = createReducer(
    defaultState,
    on(StudentActions.ADD_STUDENT, (state, action) => {
        return [...state, action.payload]
     })
)
