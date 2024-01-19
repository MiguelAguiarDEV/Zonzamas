import { Component,Input } from '@angular/core';
import { Gif } from '../interfaces/gifs';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input()

  public gifs: Gif[] = [];
}
