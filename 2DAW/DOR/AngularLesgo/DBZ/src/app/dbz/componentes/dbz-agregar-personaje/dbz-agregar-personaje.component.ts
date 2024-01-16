import { Component, EventEmitter,Input,Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';
import {FormsModule} from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'dbz-agregar-personaje',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './dbz-agregar-personaje.component.html',
  styleUrl: './dbz-agregar-personaje.component.css'
})
export class DbzAgregarPersonajeComponent {
  @Output()
  public nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  public personaje: Personaje = {
    nombre: '',
    poder: 0
  };

  
  emitirPersonaje(): void {
    console.log(this.personaje);
    if (this.personaje.nombre.length === 0) return;
    this.nuevoPersonaje.emit(this.personaje);

    this.personaje = {nombre: '', poder: 0};
  }
  
}
