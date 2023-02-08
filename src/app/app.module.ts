import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BackgroundComponent } from './sections/background/background.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const appRoutes: Routes = [
  {path: 'view-tasks', component: TasksComponent},
  {path: 'add-user', component: AddUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
    LandingPageComponent,
    BackgroundComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
