import { createReducer, on } from '@ngrx/store';
import { AppState } from '../app.state';
import * as StudentActions from './student.actions';
import { Student } from './student.model';


const defaultState :  ReadonlyArray<Student> = [
    { id: 2, name : 'Yadu' }
];



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
    on(StudentActions.ADD_STUDENT, (state, action) => [
        ...state,
        action.payload,
      ]),
     on(StudentActions.INIT_STUDENT, (state, action) => { 
        console.log(action.payload);
        return ([...state,...action.payload])
    })
);

