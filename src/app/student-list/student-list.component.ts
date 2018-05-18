import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-student-list',
  template: `<div>
               <h3>Student List</h3>
               <ul *ngFor = 'let student of students'>
                  <li>{{student.firstname}}</li>
               </ul>
             </div>`,
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students = [];
  constructor(private _studentService:StudentListService) { }
  ngOnInit() {
    this.students = this._studentService.getStudentList();
  }
}
