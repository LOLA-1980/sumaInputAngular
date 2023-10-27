import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  numero1: number = 0;
  numero2: number = 0;
  @Output() numerosSumados = new EventEmitter<number[]>();

  onInputChange() {
    this.numerosSumados.emit([this.numero1, this.numero2]);
  }
}
