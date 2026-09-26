import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  primerNumero: number | null = null;
  segundoNumero: number | null = null;
  operacionSeleccionada: string = '+';
  resultadoOperacion: number | string | null = null;

  calcular(): void {
    if (this.primerNumero === null || this.segundoNumero === null) {
      this.resultadoOperacion = 'Ingresa ambos valores para operar';
      return;
    }

    switch (this.operacionSeleccionada) {
      case '+':
        this.resultadoOperacion = this.primerNumero + this.segundoNumero;
        break;
      case '-':
        this.resultadoOperacion = this.primerNumero - this.segundoNumero;
        break;
      case '*':
        this.resultadoOperacion = this.primerNumero * this.segundoNumero;
        break;
      case '/':
        this.resultadoOperacion = this.segundoNumero !== 0 
          ? this.primerNumero / this.segundoNumero 
          : 'No se puede dividir entre cero';
        break;
      default:
        this.resultadoOperacion = 'Operación inválida';
    }
  }
}