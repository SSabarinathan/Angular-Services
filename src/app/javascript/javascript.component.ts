import { Component } from '@angular/core';
import { EnrollService } from './Services/enroll.services';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers:[EnrollService]
})
export class JavascriptComponent {
  title="JavaScript";

constructor(private enrollService:ServiceService){

}

  // OnEnroll(){
  //   alert("Thank you for select " +this.title+ " Course")
  // }
OnEnroll(){
  // const enrollService= new EnrollService()

  this.enrollService.OnEnrollClicked(this.title)
}

}
