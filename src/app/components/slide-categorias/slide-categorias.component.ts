import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-categorias',
  templateUrl: './slide-categorias.component.html',
  styleUrls: ['./slide-categorias.component.scss'],
})
export class SlideCategoriasComponent implements OnInit {

  @Input() categorias: string[] = [];
  @Input() colores: string[] = [];
  titulo : string = "Categorías principales"


  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: -12
  }

  constructor() { }

  ngOnInit() {
  }


}
