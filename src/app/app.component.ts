import { Component } from '@angular/core';
import { DymaComponent } from "./dyma.component";

@Component({
  selector: 'app-root',
  imports: [DymaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'theorie';
}
