import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  /*Resultado de la suma de los números */
  @Input() resultado: number = 0;
}

/*export class CalculadoraComponent {
  num1 = 10;
  num2 = 5;

  sum() {
    return this.num1 + this.num2;
  }
}*/
