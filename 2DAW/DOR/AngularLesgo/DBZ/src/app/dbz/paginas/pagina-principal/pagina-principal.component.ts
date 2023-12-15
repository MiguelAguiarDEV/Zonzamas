import { Component } from '@angular/core';
import { DbzListadoComponent } from '../../componentes/dbz-listado/dbz-listado.component';
import { DbzAgregarPersonajeComponent } from '../../componentes/dbz-agregar-personaje/dbz-agregar-personaje.component';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [DbzListadoComponent,DbzAgregarPersonajeComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {
  public personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 1000
    },
    {
      nombre: 'Goku',
      poder: 9500
    }
  ];
}
