import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderNav } from '@ng-mf/data';

@NgModule({
  declarations: [AppComponent, HeaderNav],
  imports: [
    BrowserModule,
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
