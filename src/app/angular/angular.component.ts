import { Component } from '@angular/core';
import { EnrollService } from '../javascript/Services/enroll.services';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {

  title="Angular";
  // OnEnroll(){
  //   alert("Thank you for select " +this.title+ " Course")
  // }

  OnEnroll(){
    const enrollservice=new EnrollService();
    enrollservice.OnEnrollClicked(this.title);
  }
}
