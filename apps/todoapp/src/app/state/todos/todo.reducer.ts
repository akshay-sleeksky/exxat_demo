import { createReducer } from '@ngrx/store';
import { on } from 'events';
import { Todo } from '../../remote-entry/todo.model';
import { AppState } from '../app.state';
import { addTodo } from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: any = {
  todos: [],
  error: null,
  status: 'pending',
};

export const todoReducer = createReducer(
  // Supply the initial state
  initialState,

  // Add the new todo to the todos array
  on(addTodo, (state: any, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content: content }],
  })),

  //   Remove the todo from the todos array
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))
);
