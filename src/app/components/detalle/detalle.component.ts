import { Component, Input, OnInit } from '@angular/core';
import { MovieDBService } from '../../services/movie-db.service';
import { PeliculaDetalle, Cast } from '../../models/detalle.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id:string;

  ocultar = 160;
  movie : PeliculaDetalle={};
  actores: Cast[]=[];

  slideOptActores={
    slidesPerView: 2.5,
    freeMode:true,
    spaceBetween:-5,
    loop:true,
    autoplay: true
  }
  constructor(private movieService:MovieDBService, private modalCtrl:ModalController) { }

  ngOnInit() {
    this.cargarData();
  }

  cargarData(){
    this.movieService.getDetailsMovie(this.id).subscribe(resp=>{
      this.movie = resp;
    })
    this.movieService.getCreditsMovie(this.id).subscribe(resp=>{
      this.actores = resp.cast;
    })
  }

  regresar(){
    this.modalCtrl.dismiss();
  }

}
