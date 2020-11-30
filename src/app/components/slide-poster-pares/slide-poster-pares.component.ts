import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/movie.model';

@Component({
  selector: 'app-slide-poster-pares',
  templateUrl: './slide-poster-pares.component.html',
  styleUrls: ['./slide-poster-pares.component.scss'],
})
export class SlidePosterParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Input() titulo: string = '';
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: -12
  }

  constructor() { }

  ngOnInit() { }


  loadData(){
    this.cargarMas.emit();
  }

}
