import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/movie.model';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

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

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() { }


  loadData(){
    this.cargarMas.emit();
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
