import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { combineReducers, StoreModule } from '@ngrx/store';
import { todoReducer } from './remote-entry/state/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { songReducer } from './remote-entry/song/song.reducer';

const reducers = combineReducers({
  todos: todoReducer,
  songs: songReducer,
});
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ states: reducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
