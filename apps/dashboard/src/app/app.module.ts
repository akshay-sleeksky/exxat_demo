import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { HeaderNav } from '@ng-mf/data';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderNav],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
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
          path: '**',
          component: HomeComponent,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
