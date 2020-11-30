import { Component, Input, OnInit } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';
import { Pelicula } from '../../models/movie.model';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
})
export class SlideShowComponent implements OnInit {

  @Input() peliculas:Pelicula[]=[];
  @Input()titulo='';

  slideOpts={
    dynamicBullets: true,
    slidesPerView:1,
    autoplay: true,
    loop: true,
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
