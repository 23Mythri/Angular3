import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
//   //style binding
  // val="technoElevate"
//   isSpecial:boolean=true
//   c1="blue"
//   c2="red"
//   //class binding
//   ispara:boolean=true
//   //attribute binding
//   colval=2;

  display(){
    console.log('display inside the function')
    }
    displayResult='abc';
  val:string="technoelevate "
}




  


