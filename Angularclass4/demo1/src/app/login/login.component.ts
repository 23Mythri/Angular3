import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    uemail:new FormControl("",[Validators.required,Validators.minLength(8),Validators.email]),
    upass:new FormControl("",[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z]*')])
  })
  get uemail(){
    return this.loginForm.get("uemail")
  }
  get upass(){
    return this.loginForm.get("upass")
  }
  login(){
    console.log(this.loginForm.value);
    
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
