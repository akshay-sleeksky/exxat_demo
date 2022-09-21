import { createReducer, on } from '@ngrx/store';
import { Todo } from '../todo/todo.model';
import {
  addTodo,
  removeTodo,
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
  retrievedTodoList,
} from './state.actions';

export interface TodoState {
  todos: {
    id: string;
    title: string;
  }[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ReadonlyArray<Todo> = [
  { id: '1', title: 'Wash your hand' },
  { id: '2', title: 'Wet your hands' },
];

export const todoReducer = createReducer(
  initialState,
  on(retrievedTodoList, (state, { todos }) => todos)
);

// on(addTodo, (state, { title }) => ({
//   ...state,
//   todos: [...state.todos, { id: Date.now().toString(), title: title }],
// })),
// // Remove the todo from the todos array
// on(removeTodo, (state, { id }) => ({
//   ...state,
//   todos: state.todos.filter((todo) => todo.id !== id),
// })),
// // Trigger loading the todos
// on(loadTodos, (state) => ({ ...state, status: 'loading' })),
// // Handle successfully loaded todos
// on(loadTodosSuccess, (state, { todos }) => ({
//   ...state,
//   todos: todos,
//   error: null,
//   status: 'success',
// })),
// // Handle todos load failure
// on(loadTodosFailure, (state, { error }) => ({
//   ...state,
//   error: error,
//   status: 'error',
// }))
