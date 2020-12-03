import { Component } from '@angular/core';
import { DataSqlLiteService } from '../../services/data-sql-lite.service';
import { PeliculaDetalle, Genre } from '../../models/detalle.model';
import { MovieDBService } from '../../services/movie-db.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  peliculasFavoritas: PeliculaDetalle[] = [];
  listaGeneros: Genre[] = [];
  favoritoGenero: any[] = [];

  constructor(private dataService: DataSqlLiteService, private movieService:MovieDBService) {
  }

  async ionViewWillEnter(){
    this.movieService.getMovieCategories().subscribe(gen=>{ this.listaGeneros = gen.genres; });
    this.peliculasFavoritas= await this.dataService.cargarFavoritos();
    this.pelisPorGenero(this.listaGeneros, this.peliculasFavoritas);
  }

  pelisPorGenero(generos:Genre[], peliculas:PeliculaDetalle[]){
    this.favoritoGenero = [];
    generos.forEach(gene=>{
      this.favoritoGenero.push({
        genero: gene.name,
        pelis: peliculas.filter(peli=>{
          return peli.genres.find(genre=>genre.id === gene.id);
        })
      });
    });
  }

}
