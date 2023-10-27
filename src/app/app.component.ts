import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado: number = 0;
  resultadoVisible: boolean = false;

  sumarNumeros(numeros: number[]) {
    this.resultado = numeros[0] + numeros[1];
    this.resultadoVisible = true;
  }
}
