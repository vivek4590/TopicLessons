import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `<div><h3>{{parentData}}</h3>
            Enter input to sent to parent Component : <input [(ngModel)] = "txtInput" type="text" />
            <button (click) = "sendEvent(txtInput)">Send Message</button>
            </div>`,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
   @Input() public parentData;
  //  @Input('parentData') public dataName;
   
  constructor() { }
  @Output() public childEvent = new EventEmitter();
  ngOnInit() {
  }
  sendEvent(value){
    this.childEvent.emit(value);
  }

}
