import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './Guard/auth.guard';
import { UnsavedGuard } from './Guard/unsaved.guard';


const routes: Routes = [
  {path:"",redirectTo:"users",pathMatch:"full" },
  {path:"users",component:UsersComponent,},
  {path:"aboutus",component:AboutusComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent,canDeactivate:[UnsavedGuard]},
  {path:"registration",component:RegistrationComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"about-us",component:AboutusComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
