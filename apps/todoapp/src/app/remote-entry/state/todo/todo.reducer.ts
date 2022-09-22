import { createReducer, on } from '@ngrx/store';
import { addTodo, editTodo, removeTodo } from './todo.actions';
import { Todo } from './todo.model';

export const initialState: ReadonlyArray<Todo> = [
  { id: '1', title: 'Wash your hand' },
  { id: '2', title: 'Wet your hands' },
];

export const todoReducer = createReducer(
  initialState,

  on(addTodo, (state, { title }) => [
    ...state,
    { id: Date.now().toString(), title: title },
  ]),

  on(removeTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(editTodo, (state, { id, newTitle }) => {
    const index = state.findIndex((todo) => todo.id == id);
    const tempState = state;
    console.log(tempState[index]);
    tempState[index].title = newTitle;
    return tempState;
  })
);
