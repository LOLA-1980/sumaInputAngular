import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  /* Primer número para la suma */
  numero1: number = 0;
  /* Segundo número para la suma */
  numero2: number = 0;
  /* Evento que emite los dos números para realizar la suma */
  @Output() numerosSumados = new EventEmitter<number[]>();

  /** Método que se activa cuando hay cambios en los campos de entrada */
  onInputChange() {
    this.numerosSumados.emit([this.numero1, this.numero2]);
  }
}
