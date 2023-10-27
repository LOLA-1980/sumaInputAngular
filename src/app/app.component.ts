import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*Almacena el resultado de la suma */
  resultado: number = 0;
  /*Controla la visibilidad del resultado */
  resultadoVisible: boolean = false;

  /*Realiza la suma de los números recibidos como parámetro y actualiza el resultado */
  sumarNumeros(numeros: number[]) {
    this.resultado = numeros[0] + numeros[1];
    this.resultadoVisible = true;
  }
}
