import { Component } from '@angular/core';
import { MovieDBService } from '../../services/movie-db.service';
import { Pelicula } from '../../models/movie.model';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  ideas:string[] = [ 'Sonic: La pelicula', 'Tenet', 'Togo', '1917', 'It', 'Sin tiempo para morir', 'El faro', 'Green book', 'El Rey León', 'Aves de presa', 'Wonder Woman 1984' ];
  peliculas: Pelicula[]=[];
  buscando = false;

  constructor(private movieService:MovieDBService, private modalCtrl:ModalController) {}


  onSearchChange(evt){
    const valor = evt.detail.value;
    this.buscar(valor);
  }

  buscar(idea:string){
    this.textoBuscar=idea;
    if (this.textoBuscar) {
      this.buscando = true;
      this.movieService.getMovieFind(idea).subscribe(resp=>{
        this.peliculas=resp.results;
        this.buscando = false;
      })
    }else{
      this.peliculas = []
      return;
    }
  }

  async presentModal(id:string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        id:id
      }
    });
    return await modal.present();
  }

}
