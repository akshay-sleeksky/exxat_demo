import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderNav } from '@ng-mf/data';
import { ProductsModule } from '@ng-mf/products';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, HeaderNav],
  imports: [
    BrowserModule,
    ProductsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('dashboard/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'associated-schools',
          loadChildren: () =>
            import('associated-schools/Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'student-placement',
          loadChildren: () =>
            import('student-placement/Module').then((m) => m.RemoteEntryModule),
        },

        {
          path: 'todoapp',
          loadChildren: () =>
            import('todoapp/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'dashboard',
          loadChildren: () =>
            import('dashboard/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'todo',
          loadChildren: () =>
            import('todoapp/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '**',
          loadChildren: () =>
            import('dashboard/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
