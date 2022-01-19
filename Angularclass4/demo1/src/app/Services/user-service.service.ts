import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 getData(){
   return [
     {name:"Mythri",id:101,department:"development"},
     {name:"chandu",id:102,department:"development"}
   ]
 }
  constructor() { }
}
