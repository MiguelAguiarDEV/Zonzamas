import { Component } from '@angular/core';
import { DbzListadoComponent } from '../../componentes/dbz-listado/dbz-listado.component';
import { DbzAgregarPersonajeComponent } from '../../componentes/dbz-agregar-personaje/dbz-agregar-personaje.component';
import { Personaje } from '../../interfaces/personaje';
import { DbzService } from '../../servicios/dbz.service';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [DbzListadoComponent,DbzAgregarPersonajeComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent{
  constructor( public dbzService: DbzService ){
    
  }
}