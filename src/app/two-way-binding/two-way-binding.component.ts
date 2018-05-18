import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `<div>
                  <h3 [style.color] = "'brown'">{{name}}</h3>
                  UserName: <input [(ngModel)]="txtName" type="text" />
                  {{txtName}}<br /><br />
                  Password: <input [(ngModel)]="txtPassword" type="password" /> <br />
                  <button (click)="onClickDisplay(txtPassword,txtName)" >Display</button><Br />
                  <h4>{{msgInput}}</h4>
               </div>`,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  public name = "Two Way Binding";
  public txtName = "";
  public txtPassword = "";
  public msgInput = "No Input"
  constructor() { }
  ngOnInit() {
  }
  onClickDisplay(password,name)
  {
    this.msgInput = "Input entered: " + name + " " + password ;
  }
}
