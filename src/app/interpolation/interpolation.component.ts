import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `<div>
               <h3> Welcome to {{name}} </h3>  <!--Use of Interpolation -->
               <h3> Expression : 2 + 2 = {{2 + 2}} </h3>
               <h3> Concatenation : {{ initialNote + name }}</h3>
               <h3> To Upper: {{ initialNote.toUpperCase() + name.toUpperCase()}}</h3>
               <h3> Length : {{ name.length + initialNote.length + 1 }} </h3>
               <h3>{{greeting()}}</h3>
               <h3>Current working URL : {{currentUrl}}</h3>
             </div>`,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public name = "NTT Data";
  public initialNote = "Welcome to ";
  public currentUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }
  greeting()
  {
    return 'Line using function call: ' + this.initialNote + this.name;
  }
}
