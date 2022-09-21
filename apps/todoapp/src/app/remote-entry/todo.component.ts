import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo, loadTodos } from '../state/todos/todo.actions';
import { Todo } from './todo.model';
import { selectAllTodos } from '../state/todos/todo.selectors';

@Component({
  selector: 'ng-mf-todoapp',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  // public allTodos$ = this.store.select(selectAllTodos);
  public todo = '';
  editableId: string | null = null;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  addTodo = (todo: string) => {
    // this.todos.push({ id: uuid.v4(), content: todo });
    this.store.dispatch(addTodo({ content: todo }));
  };

  deleteTodo = (id: string) => {
    // const newArr = this.todos.filter((todo) => todo.id !== id);
    // this.todos = newArr;
    this.store.dispatch(removeTodo({ id: id }));
  };

  setEditing = (payload: string | null) => {
    this.editableId = payload;
  };

  // editTodo = (id: string, value: string) => {
  //   const index = this.todos.findIndex((todo) => todo.id == id);
  //   this.todos[index].content = value;
  //   this.editableId = null;
  // };
}
