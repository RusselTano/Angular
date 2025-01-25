import {
  Component,
  computed,
  effect,
  linkedSignal,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  lang: string[];
}

@Component({
  selector: 'app-product',
  imports: [FormsModule],
  template: `
    <br />
    <select
      name=""
      id=""
      [ngModel]=""
      class="border rounded p-2 mb-3 mt-3"
      (ngModelChange)="selectedProduct.set($event)"
    >
      <option disabled [value]="null">Choose a product</option>
      @for(product of products(); track product.name){
      <option [ngValue]="product">{{ product.name }}</option>
      }
    </select>
    @if (this.selectedProduct()) {
    <br />
    <select class="border rounded p-2 mb-3 mt-3"
      [ngModel]="selectedLang()"
      (ngModelChange)="selectedLang.set($event)"
    >
      <option disabled [value]="null">Choose a lang</option>
      @for (lang of this.selectedProduct()?.lang; track $index) {
      <option [value]="lang">{{ lang }}</option>
      }
    </select>
    }
    <br /><br />
    <hr />
    <input
      type="number"
      placeholder="quantity"
      class="border rounded p-2 mb-3 mt-3"
      [(ngModel)]="quantity"
    />
    <hr />
    <h1>Prix : {{ price() }}</h1>
    <p>{{ quantity() }}</p>
  `,
  styles: ``,
})
export class ProductComponent {
  products = signal<Product[]>([
    {
      name: 'Cz Shaow 2',
      price: 185,
      lang: ['fr', 'en'],
    },
    {
      name: 'Glock 17',
      price: 600,
      lang: ['es', 'en'],
    },
  ]);

  selectedProduct = signal<Product | null>(null);
  selectedLang = linkedSignal(() => this.selectedProduct()?.lang[0]);
  // Methode 1
  // quantity = signal<number>(1);
  price = computed(
    () => (this.selectedProduct()?.price || 0) * this.quantity()
  );

  // Meilleur Methode
  quantity = linkedSignal({
    source: this.selectedProduct,
    computation: () => {
      return 1;
    },
  });

  constructor() {
    effect(() => {
      console.log(this.selectedProduct());
    });
  }
}
