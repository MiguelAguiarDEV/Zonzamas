import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-listado',
  templateUrl: 'listado-heroes.component.html'
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America', 'Visión'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }

  restaurarHeroes(){
    this.heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America', 'Visión'];
    this.heroeBorrado = '';
  }
}
