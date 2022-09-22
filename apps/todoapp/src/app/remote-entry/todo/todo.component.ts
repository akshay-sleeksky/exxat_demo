import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, editTodo, removeTodo } from '../state/todo/todo.actions';
import { selectTodos } from '../state/todo/todo.selectors';

@Component({
  selector: 'ng-mf-todoapp',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  public editableId: string | null = null;

  public todos$ = this.store.select(selectTodos);

  constructor(private store: Store) {}

  addTodo(title: string) {
    this.store.dispatch(addTodo({ title }));
  }

  deleteTodo = (id: string) => {
    this.store.dispatch(removeTodo({ id }));
  };

  setEditing = (payload: string | null) => {
    this.editableId = payload;
  };

  editTodo = (id: string, newTitle: string) => {
    this.store.dispatch(editTodo({ id, newTitle }));
    this.editableId = null;
  };
}
