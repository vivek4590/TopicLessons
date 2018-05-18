import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatvariable',
  template: `<div>
  <h3 [style.color] = "'brown'">{{name}}</h3>
  Enter Your Name : <input #firstInput [id]="nameInput" type="text" />
  <button (click) = "greetLog(firstInput.value)" >Greeting & Log</button>
  <h4 [hidden] = "isHiddenFlag" >Hello {{inputMessage}} We value your precious time! </h4>
</div>`,
  styleUrls: ['./templatvariable.component.css']
})
export class TemplatvariableComponent implements OnInit {
  public name = "Template Reference Binding";
  public nameInput = "txtName";
  public inputMessage = "";
  public isHiddenFlag = true;
    constructor() { }
    ngOnInit() {
    }
    greetLog(value){
      this.inputMessage = value;
      console.log(value);
      this.isHiddenFlag = !this.isHiddenFlag ; 
    }

}
