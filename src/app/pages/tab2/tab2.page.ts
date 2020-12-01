import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  ideas:string[] = [ 'Sonic: La pelicula', 'Tenet', 'Togo', '1917', 'It', 'Sin tiempo para morir', 'El faro', 'Green book', 'El Rey León', 'Aves de presa', 'Wonder Woman 1984' ]

  constructor() {}


  onSearchChange(evt){
    const valor = evt.detail.value;
    console.log(valor);
  }

  enviar(idea:string){
    this.textoBuscar=idea;
  }

}
