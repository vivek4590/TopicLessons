import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  template: `<div>
               <h4 *ngIf="true">{{name}}</h4>     <!-- Static condition to *ngIf-->
               <h4 *ngIf="isDisplay">Statement Hidden / Show by *ngIf</h4> <!-- Property Binded condition to *ngIf-->
               <h3 *ngIf = "isNotHidden; else elseSection">Statement display using *ngIf else condition. I am in If condition</h3>
               <ng-template #elseSection>
               <h3>Statement display using *ngIf else condition. I am in else condition</h3>
               </ng-template>
               <div *ngIf="displayFlag; then thenblock else elseblock"></div>
               <ng-template #thenblock>
                   <h4>I am in Then Block</h4>
               </ng-template>
               <ng-template #elseblock>
                    <h4>I am in else Block</h4>
               </ng-template>
               Select Color(red,blue,green) : <input [(ngModel)]="colorSelected" type="text" />
               <div [ngSwitch]="colorSelected">
                  <div *ngSwitchCase = "'red'">Red Color is selected</div>
                  <div *ngSwitchCase = "'blue'">Blue Color is selected</div>
                  <div *ngSwitchCase = "'green'">Green Color is selected</div>
                  <div *ngSwitchCase = "''">No Color is selected</div>
                  <div *ngSwitchDefault>Wrong Color is selected</div>
               </div>
            <div>`,
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {
public name = "Structural If Directive";
public isDisplay = true;
public isNotHidden = false;
public displayFlag = false;
public colorSelected = "";
  constructor() { }
  ngOnInit() {}
}
