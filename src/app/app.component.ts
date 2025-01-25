import { Component } from '@angular/core';
import { DymaComponent } from "./dyma.component";
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-root',
  imports: [DymaComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'theorie';
}
