import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
 @ViewChild("username")element!:ElementRef
 num:any=`${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
 ID:any
 idGenerator(){
   let name=(this.element!.nativeElement.value).substring(0,3).toUpperCase()
   this.ID="TYDEV"+name+this.num
 }
  constructor(private user:UserServiceService) { }
 result:any
 
  ngOnInit(): void {
      this.result=this.user.getData()
      
  }
  
}



