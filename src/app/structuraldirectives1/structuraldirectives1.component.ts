import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives1',
  template: `<div>
               Enter Color in array: <input [(ngModel)] = "inputcolor" type="text" /> <button (click) = "addColor(inputcolor)">Add</button>
               <div *ngFor = "let color of colors; index as i">  <!-- first , last, odd, even indications -->
                   <span>{{i+1}} : {{color}}</span><br />
               </div>
             </div>`,
  styleUrls: ['./structuraldirectives1.component.css']
})
export class Structuraldirectives1Component implements OnInit {
  public colors = ["red","blue","green"];
  public inputcolor = "";
  constructor() { }
  ngOnInit() { }
  addColor(value){
    this.colors.push(value);
  }
}
