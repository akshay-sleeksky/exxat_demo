import { Component } from '@angular/core';
import * as uuid from 'uuid';
@Component({
  selector: 'ng-mf-todoapp',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  title = 'todo';
  editableId: string | null = null;

  todos: { id: string; title: string }[] = [
    { id: 'abc', title: 'Take a Shower' },
    { id: 'abd', title: 'Finihs your breakfast' },
  ];

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
