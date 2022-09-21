import { createFeatureSelector } from '@ngrx/store';
import { Todo } from '../todo/todo.model';

export const selectTodos = createFeatureSelector<ReadonlyArray<Todo>>('books');
