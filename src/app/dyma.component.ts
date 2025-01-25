import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
//ng generate component nom-du-composant --inline-template --inline-style
//ng g c nom-du-composant -ts --skip-tests
@Component({
  selector: 'app-dyma',
  imports: [FormsModule],
  template: `
    <p class="text-center mt-5">
      <span
        class="text-cyan-500 p-2 cursor-pointer transition-colors rounded font-bold hover:bg-cyan-100"
        >{{ author }}</span
      >
      :
      <span class="bg-blue-100 p-2 text-blue-400 rounded"
        >je sui un {{ type }}</span
      >
      <span>{{ isLoading ? 'connecte' : 'non connecte' }}</span>
    </p>
    <input
      [type]="inputType"
      name="name"
      id=""
      placeholder="name"
      class="border rounded p-2"
      (input)="updateTitle($event)"
    />
    <button
      class="px-5 py-2 rounded bg-cyan-500 hover:bg-cyan-400 transition block mt-3 cursor-pointer text-white"
      (click)="handleClick($event)"
    >
      Click
    </button>
    <br />
    <input type="text" class="border rounded p-2" [(ngModel)]="username" />
    <p>{{ helloInFr() }}</p>
  `,
})
export class DymaComponent {
  author: string = 'Didicode';
  isLoading: boolean = true;
  nombre: number = 34;
  type: string = 'zombie';
  inputType: string = 'text';
  name: string | undefined;
  username = signal<string>('Didicode');

  constructor() {
    setTimeout(() => {
      this.inputType = 'number';
      // this.title.set('world');
      this.username.update((oldValue) => {
        return oldValue + ' Youtube !';
      });
    }, 3000);
  }

  helloInFr = computed(() => {
    return `Bonjour ${this.username()}`;
  });

  handleClick(event: MouseEvent) {
    console.log('handleClick', event);
  }

  updateTitle(event: Event) {
    const { value } = event.target as HTMLInputElement;
    console.log(value);
  }
}
