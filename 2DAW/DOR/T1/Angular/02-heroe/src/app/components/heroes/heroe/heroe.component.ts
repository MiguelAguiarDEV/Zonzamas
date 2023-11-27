import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
  titulo: string = 'Heroe Component Funciona';
  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado(): string {
      return this.nombre.toLocaleUpperCase();
  }

  obtenerNombre(): string {
      return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
      this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
      this.edad = 25;
  }
}
