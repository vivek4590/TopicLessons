import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<div>
  <h3>{{name}}</h3>
<input [id]="myId1" type="text" value = "NTT Data" />
<input [disabled]="isDisabled" id="{{myId}}" type="text" value = "NTT Data by using Interpolation" />
<input bind-disabled="isDisabled" id="{{myId}}" type="text" value = "NTT Data by using Interpolation" />
<!-- <input disabled = "false" [id]="myId" type="text" value = "NTT Data" />  -->        
</div>`,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  public name = "Working with Property";
  public myId1 = "My-First-Id";
  public myId = "My-Test-Id";
  public isDisabled = true;
  constructor() { }
  ngOnInit() {
  }

}
