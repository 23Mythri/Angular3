import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  users=[
    {name:"Mythri",city:"Tumkur",ID:101,salary:40000,dob:new Date("26 july 1999")},
    {name:"chandu",city:"banglore",ID:102,salary:30000,dob:new Date("18 january 1996 ")},
    {name:"jayashree",city:"Andhra",ID:103,salary:20000,dob:new Date("07 may 1999")}
  ]
 
  
  
  
  constructor() {
    // localStorage.setItem("hello",this.users[0].ID)
    localStorage.setItem("table",JSON.stringify(this.users));
    let neneu=localStorage.getItem("table")
    console.log(neneu);
   sessionStorage.setItem("",JSON.stringify(this.users))
  //  
   
   }
    
  ngOnInit(): void {
    const observable=new Observable(sub=>{sub.next(Math.random())
  })
  //1st listener
  observable.subscribe(result=>{console.log(result);
  })

  //2nd listener
  observable.subscribe(result=>{console.log(result);
  })

  const subject=new Subject()
  //1st listener
  subject.subscribe(result=>{console.log(result);
  })

   //1st listener
   subject.subscribe(result=>{console.log(result);})
  }}
  
