import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
// import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ParentComponent,
    ChildComponent,
    // DemoComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
