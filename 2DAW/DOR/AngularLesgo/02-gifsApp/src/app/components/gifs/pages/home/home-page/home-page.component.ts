import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../search-box/search-box.component';
import { CardListComponent } from '../../../card-list/card-list.component';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [SearchBoxComponent,CardListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
