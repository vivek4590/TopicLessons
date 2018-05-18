import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `<div>
                <h3>Lower Case : {{message | lowercase}}</h3>
                <h3>Upper Case : {{message | uppercase}}</h3>
                <h3>Title Case : {{message | titlecase}}</h3>
                <h3>Slice : {{message | slice:8:27}}</h3>
                <h3>{{colors}} or {{colors | json}}</h3>
                <span><strong>{{5.678 | number: '1.2-3'}}</strong></span><Br />
                <span><strong>{{5.678 | number: '3.4-5'}}</strong></span><Br />
                <span><strong>{{5.678 | number: '3.1-2'}}</strong></span><Br />
                <span><strong>{{0.25 | percent }}</strong></span><Br /><Br />
                <span><strong>{{0.25 | currency}}</strong></span> <Br />  
                <span><strong>{{0.25 | currency: 'EUR'}}</strong></span><Br />
                <span><strong>{{0.25 | currency: 'GBP' : 'code'}}</strong></span><Br /><Br />
                <span>{{date}}</span><Br />
                <span><strong>Short Full:</strong> {{date | date:'short'}} <strong> Only Date:</strong> {{date | date:'shortDate'}} <strong> Only Time:</strong> {{date | date:'shortTime'}}</span><Br />
                <span><strong>Medium Full:</strong> {{date | date:'medium'}} <strong> Only Date:</strong> {{date | date:'mediumDate'}} <strong> Only Time:</strong> {{date | date:'mediumTime'}}</span><Br />
                <span><strong>Long Full:</strong> {{date | date:'long'}} <strong> Only Date:</strong> {{date | date:'longDate'}} <strong> Only Time:</strong> {{date | date:'longTime'}}</span>
                <h4>{{date}}</h4>
            </div>`,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public message = "Welcome to Experian Angular Demo!!";
  constructor() { };ngOnInit() {}
  public colors = {
        "firstColor": "Red","secondColor":"Green","thirdColor":"Blue"
  }
  public date =  new Date();

}
