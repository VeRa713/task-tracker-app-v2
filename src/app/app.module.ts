import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { BackgroundComponent } from './sections/background/background.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { UsersComponent } from './pages/users/users.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const appRoutes: Routes = [
  {path: 'add-task', component: AddTaskComponent},
  {path: 'view-tasks', component: TasksComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'view-users', component: UsersComponent},
  {path: 'edit-task/:id', component: EditTaskComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
    BackgroundComponent,
    TasksComponent,
    AddTaskComponent,
    UsersComponent,
    TaskItemComponent,
    UserItemComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
