import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../../services/movie-db.service';
import { Pelicula } from '../../models/movie.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  listaPeliculasRecientes: Pelicula[] =[];
    
  constructor(private moviedbservice:MovieDBService) {}

  ngOnInit(): void {
    this.moviedbservice.getMoviesPremiere().subscribe(data=>{
      console.log(data.results);
      this.listaPeliculasRecientes = data.results;
    })
  }






}
