import { Component } from '@angular/core';
import { NumberParentComponent } from "./components/number-parent/number-parent.component";

@Component({
  selector: 'app-root',
  imports: [
    NumberParentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
