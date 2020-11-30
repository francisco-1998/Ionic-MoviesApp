import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../../services/movie-db.service';
import { Pelicula, RespTMDB } from '../../models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  listaPeliculasRecientes: Pelicula[] =[];
  listaPeliculasUpcoming:Pelicula[] =[];
  listaPeliculasPopulares:Pelicula[] =[];
  listaCategorias:any[] =[];
  listaColores:string[]=[
"#F2C641",
"#e85d60",
"#c3e72c",
"#4dc6a8",
"#3270ff",
"#c0ab62",
"#F44336",
"#c6dd23",
"#f07e29",
"#9b12d8",
"#3be57c",
"#6d2a8f",
"#424257",
"#511234",
"#BC04CB",
"#426d42",
"#b4ff46",
"#e20885",
"#2B8EB1",
]

  nombreSeccion1 = "En cines"
  nombreSeccion2 = "Próximamente"
  nombreSeccion3 = "Populares"
    
  constructor(private moviedbservice:MovieDBService) {}

  ngOnInit(): void {
    this.listadoPeticiones();
  }


  listadoPeticiones(){
    this.moviedbservice.getNowPlaying().subscribe(data=>{
      this.listaPeliculasRecientes = data.results;
    })

    this.moviedbservice.getMovieUpcoming().subscribe(data=>{
      this.listaPeliculasUpcoming = data.results;
    })

    this.moviedbservice.getMoviePopular().subscribe(data=>{
      this.listaPeliculasPopulares = data.results;
    })

    this.moviedbservice.getMovieCategories().subscribe(data=>{
      this.listaCategorias = this.asignarColores(data.genres.length,data.genres);
      console.log(this.listaCategorias);
    })
  }

  asignarColores(cantidad:number, data){
    for (let i = 0; i < cantidad; i++) {

      data[i].color = this.listaColores[i];
    }
    return data;
  }

}
