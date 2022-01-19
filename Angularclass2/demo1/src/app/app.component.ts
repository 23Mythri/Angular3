import { Component } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;

  users=[
    {name:"virat",age:40},
    {name:"rohith",age:41},
    {name:"shikar",age:42},
    {name:"virat",age:43  },
  ]
  selectedCountry='ind'
    
  title = 'demo';
  flag:boolean=false
  showData(){
    if(this.flag==false){
      this.flag=true
    }else{
      this.flag=false
    }
  }
}
