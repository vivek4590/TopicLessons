import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  constructor() { }
  getStudentList(){
    return [
      { "id":"100","firstname":"Gaurav","lastname":"Sharma","standard":"6","mobileno":"09873450291"},
      { "id":"101","firstname":"Shrikant","lastname":"Shetty","standard":"5","mobileno":"09873450029"},
      { "id":"102","firstname":"Ankita","lastname":"Gaur","standard":"6","mobileno":"09873458945"}
    ];
  }
}
