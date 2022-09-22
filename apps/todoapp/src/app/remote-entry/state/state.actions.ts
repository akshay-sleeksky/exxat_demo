import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ title: string }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);

export const editTodo = createAction(
  '[Todo Page] Edit Todo',
  props<{ id: string; newTitle: string }>()
);
