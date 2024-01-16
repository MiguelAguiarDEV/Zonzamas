import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'dbz-listado',
  standalone: true,
  imports: [],
  templateUrl: './dbz-listado.component.html',
  styleUrl: './dbz-listado.component.css'
})
export class DbzListadoComponent {
  @Input()
  public listaPersonajes: Personaje[] =[
    {
      nombre: 'Trunks',
      poder: 1000
    },
  ];

  @Output()
  public borrar:EventEmitter<string> = new EventEmitter();
  borrarPersonaje(id: string): void {
    this.borrar.emit(id)
  }
}
