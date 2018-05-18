import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `<div>
                <h4> Working with {{name}}</h4>
                <h4 class = "text-success"> Message display!! </h4>
                <h4 [class] = "styleApply"> Message display!! </h4>
                <h4 class="text-special" [class] = "styleApply"> Message display!! </h4>
                <h4 [class.text-danger] = "hasError"> Message display!! </h4>
                <h4 [ngClass] = "messageClasses"> Message display!! </h4>
             </div>`,
  styles: [`
               .text-success {
                 color:green;
               }
               .text-danger{
                 color:red;
               }
               .text-special{
                 font-style:italic;
               }
            `]
})
export class ClassBindingComponent implements OnInit {
  public name = "Class Binding";
  public styleApply = "text-danger"
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
        "text-success": !this.hasError,
        "text-danger": this.hasError,
        "text-special": this.isSpecial
  }
  constructor() { }
  ngOnInit() {
  }

}
