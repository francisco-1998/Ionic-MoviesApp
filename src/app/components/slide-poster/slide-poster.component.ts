import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../models/movie.model';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

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
  }
  
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

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
