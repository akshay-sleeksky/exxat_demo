import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import { loadTodos } from '../state/state.actions';
import { TodoState } from '../state/state.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectTodos } from '../state/state.selectors';

@Component({
  selector: 'ng-mf-todoapp',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  title = 'todo';
  editableId: string | null = null;

  todos: { id: string; title: string }[] = [
    { id: 'abc', title: 'Take a Shower' },
    { id: 'abd', title: 'Finihs your breakfast' },
  ];

  public todos$ = this.store.select(selectTodos);

  ngOnInit() {
    this.store.dispatch(loadTodos());
    console.log('todos', this.todos$);
  }

  constructor(private store: Store) {}

  addTodo = (todo: string) => {
    this.todos.push({ id: uuid.v4(), title: todo });
  };

  deleteTodo = (id: string) => {
    const newArr = this.todos.filter((todo) => todo.id !== id);
    this.todos = newArr;
  };

  setEditing = (payload: string | null) => {
    this.editableId = payload;
  };

  editTodo = (id: string, value: string) => {
    const index = this.todos.findIndex((todo) => todo.id == id);
    this.todos[index].title = value;
    this.editableId = null;
  };
}
