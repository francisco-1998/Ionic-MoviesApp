import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../models/movie.model';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
})
export class SlideShowComponent implements OnInit {

  @Input() peliculas:Pelicula[]=[];

  slideOpts={
    dynamicBullets: true,
    slidesPerView:1.1,
    autoplay: true,
    loop: true,
  }
  
  constructor() { }

  ngOnInit() {}

}
