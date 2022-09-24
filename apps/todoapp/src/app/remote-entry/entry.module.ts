import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { combineReducers, StoreModule  } from '@ngrx/store';
import { todoReducer } from './state/todo/todo.reducer';
import { songReducer } from './state/song/song.reducer';

const reducers = combineReducers({
  todos: todoReducer,
  songs: songReducer,
});

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('states', reducers),
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
