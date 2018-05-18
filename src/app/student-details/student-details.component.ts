import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-student-details',
  template: `<div>
               <h3>Students Details</h3>
               <ul *ngFor = 'let student of students'>
                 <li>{{student.id}} {{student.firstname}} {{student.lastname}} {{student.mobileno}}</li>
               </ul>
            </div>`,
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
   public students = [];
  constructor(private _studentService:StudentListService) { }

  ngOnInit() {
    this.students = this._studentService.getStudentList();
  }

}
