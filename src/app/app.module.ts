import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { Structuraldirectives1Component } from './structuraldirectives1/structuraldirectives1.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { PipesComponent } from './pipes/pipes.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListService } from './student-list.service';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TemplatvariableComponent } from './templatvariable/templatvariable.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component'

@NgModule({
  declarations: [
    AppComponent,
    StructuraldirectivesComponent,
    Structuraldirectives1Component,
    ChildComponentComponent,
    PipesComponent,
    StudentListComponent,
    StudentDetailsComponent,
    ClassBindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    TemplatvariableComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
