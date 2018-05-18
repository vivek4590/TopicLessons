import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `<div>
               <h3>Welcome to Style Binding</h3>
               <h3 [style.color] = "'red'">Style Binding</h3>
               <h3 [style.color] = "errorMessage ? 'red' : 'green'">Style Binding with Condition</h3>
               <h3 [style.color] = "colorMessage">Style binding by property!!</h3>
               <h3 [ngStyle]="multipleStyles">Multiple Style binding</h3>
            </div>`,
  styles: [`
               .text-success{
                  color:green;
               }
             `]
})
export class StyleBindingComponent implements OnInit {
  public successMessage = "text-success";
  public errorMessage = false;
  public colorMessage = "purple"
    public multipleStyles = {
             color : "brown",
             fontStyle: "italic"
    }
  constructor() { }

  ngOnInit() {
  }

}
