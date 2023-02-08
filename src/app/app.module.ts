import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ManagerLandingPageComponent } from './pages/manager-landing-page/manager-landing-page.component';
import { UserLandingPageComponent } from './pages/user-landing-page/user-landing-page.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ManagerLandingPageComponent,
    UserLandingPageComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
