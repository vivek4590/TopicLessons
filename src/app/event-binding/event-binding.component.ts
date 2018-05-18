import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `<div>
               <h3>Listening to {{name}}</h3>
               <button (click) = "onClicking($event)">Hello Greeting</button>
               <h3 [hidden] = "isHiddenFlag" >Welcome to Event Handling session!</h3>
               <button (click) = "messageProperty = 'Welcome Again!'">Greeting</button>
               {{messageProperty}}
             <div>`,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public name = "Events";
  public isHiddenFlag = true;
  public messageProperty = "";
 constructor() { }

 ngOnInit() {
 }
 onClicking(event){
   if(this.isHiddenFlag){
     this.isHiddenFlag = false;
   }else{
     this.isHiddenFlag = true;
   }   
   console.log(event) 
 }

}
