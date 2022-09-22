import { createFeatureSelector, createSelector } from '@ngrx/store';

type TodoState = {
  todos: {
    id: string;
    title: string;
  }[];
};

export const selectStates = createFeatureSelector<TodoState>('states');

export const selectTodos = createSelector(
  selectStates,
  (state: TodoState) => state.todos
);
