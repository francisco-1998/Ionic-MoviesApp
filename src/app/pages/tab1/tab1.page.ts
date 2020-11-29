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
  nombreSeccion = "Coming Soon"
    
  constructor(private moviedbservice:MovieDBService) {}

  ngOnInit(): void {
    this.moviedbservice.getNowPlaying().subscribe(data=>{
      console.log(data.results);
      this.listaPeliculasRecientes = data.results;
    })

    this.moviedbservice.getMovieUpcoming().subscribe(data=>{
      console.log(data.results);
      this.listaPeliculasUpcoming = data.results;
    })

  }






}
