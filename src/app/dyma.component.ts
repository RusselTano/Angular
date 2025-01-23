import { Component } from '@angular/core';
//ng generate component nom-du-composant --inline-template --inline-style
//ng g c nom-du-composant -ts --skip-tests
@Component({
  selector: 'app-dyma',
  imports: [],
  template: `
    <p>dyma works!</p>
    <h2>je suis un zombie</h2>
    <br>
    <p class="text-center">
      <span class="text-cyan-500 p-2 cursor-pointer transition-colors rounded font-bold hover:bg-cyan-100">Guims</span> : <span class="bg-blue-100 p-2 text-blue-400 rounded">je sui sun zombies</span>
    </p>
  `,
  styles: ``,
})
export class DymaComponent {}
