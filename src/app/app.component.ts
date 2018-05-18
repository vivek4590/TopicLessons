import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NTT Data Experian';
  public name = "Parent to child data transfered!!";
  public message = "Angular Demo";
}
