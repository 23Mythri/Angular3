import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    var curYear=new Date().getFullYear();
    var useYear=new Date(value).getFullYear();
    var userAge=curYear-useYear
    return userAge;
  }
  

}
