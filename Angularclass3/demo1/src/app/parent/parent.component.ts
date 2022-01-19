import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 salesProducts=[
   {name:"mobile", price:22000},
   {name:"laptop", price:52000},
   {name:"Bike", price:320000},
   {name:"car", price:60000}
 ]
 newProducts=[
  {name:"watch", price:1000},
  {name:"bag", price:1500},
  {name:"ring", price:10000},
  {name:"chain", price:150000}
]
}
