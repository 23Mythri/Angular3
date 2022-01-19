import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ChildComponent } from './child/child.component';
// import { ParentComponent } from './parent/parent.component';
import { UsersComponent } from './users/users.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { ContactusComponent } from './contactus/contactus.component';
import { RegistrationComponent } from './registration/registration.component';
// import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guard/auth.guard';
// import { Login1Component } from './login1/login1.component';


@NgModule({
  declarations: [
    AppComponent,
    // ChildComponent,
    // ParentComponent,
    UsersComponent,
    AboutusComponent,
    LoginComponent,
    ContactusComponent,
    RegistrationComponent,

    // Login1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
