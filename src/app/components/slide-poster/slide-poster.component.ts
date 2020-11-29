import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../models/movie.model';

@Component({
  selector: 'app-slide-poster',
  templateUrl: './slide-poster.component.html',
  styleUrls: ['./slide-poster.component.scss'],
})
export class SlidePosterComponent implements OnInit {

  @Input() proximasMovies: Pelicula[] = [];
  @Input() titulo: string = '';

  slideOpts={
    dynamicBullets: true,
    slidesPerView:2,
    loop: true,
  }
  
  constructor() { }

  ngOnInit() {}

}
