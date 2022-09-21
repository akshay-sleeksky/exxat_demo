import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo/todo.model';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ title: string }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);

export const retrievedTodoList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ todos: ReadonlyArray<Todo> }>()
);

export const loadTodos = createAction('[Todo Page] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo API] Todo Load Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo API] Todo Load Failure',
  props<{ error: string }>()
);