import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../search-box/search-box.component';
import { CardListComponent } from '../../../card-list/card-list.component';
import { Gif } from '../../../interfaces/gifs';
import { GifsService } from '../../../../../services/gifs.service';
@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [SearchBoxComponent,CardListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor( private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

}