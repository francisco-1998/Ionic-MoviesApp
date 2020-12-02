import { Component, Input, OnInit } from '@angular/core';
import { MovieDBService } from '../../services/movie-db.service';
import { PeliculaDetalle, Cast } from '../../models/detalle.model';
import { ModalController } from '@ionic/angular';
import { DataSqlLiteService } from '../../services/data-sql-lite.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  ocultar = 160;
  movie : PeliculaDetalle={};
  actores: Cast[]=[];
  estrella = 'star-outline'

  slideOptActores={
    slidesPerView: 2.5,
    freeMode:true,
    spaceBetween:-5,
    loop:true,
    autoplay: true
  }
  constructor(private movieService:MovieDBService, 
              private modalCtrl:ModalController,
              private dataSqlLiteService:DataSqlLiteService) { }

  ngOnInit() {
    this.dataSqlLiteService.existePelicula(this.id).then(existe=>{
      if(existe){
        this.estrella = 'star'
      }else{
        this.estrella='star-outline'
      }
    })
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

  favorito(){
    const esFav = this.dataSqlLiteService.guardarFavorito(this.movie);
    this.estrella = esFav ? 'star' : 'star-outline';
  }

}
