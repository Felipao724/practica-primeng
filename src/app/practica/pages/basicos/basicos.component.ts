import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'felipe';
  nombreUpper: string = 'FELIPE';
  nombreCompleto: string = 'fElipE dE jeSus saLaS lOpEz';

  fecha: Date = new Date(); // el día de hoy
}
