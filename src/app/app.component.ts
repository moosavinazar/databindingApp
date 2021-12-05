import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // String Interpolation
  name: string = "hasan";

  // Property Binding
  isDisabled: boolean = true;

  // Event Binding
  public onInputChanged(e: Event) {
    this.name = (<HTMLInputElement>e.target).value;
    console.log(this.name);
  }
}
