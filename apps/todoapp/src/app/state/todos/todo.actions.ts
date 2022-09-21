import { createAction, props } from '@ngrx/store';
import { Todo } from '../../remote-entry/todo.model';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ content: string }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);

export const loadTodos = createAction('[Todo Page] Load Todos');

// export const loadTodos = createAction('[Todo Page] Load Todos');

// export const loadTodos = createAction('[Todo Page] Load Todos');
