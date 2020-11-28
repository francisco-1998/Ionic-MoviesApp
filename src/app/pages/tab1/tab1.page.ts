import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../../services/movie-db.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private moviedbservice:MovieDBService) {}
  ngOnInit(): void {
    this.moviedbservice.getMoviesPremiere().subscribe(data=>{
      console.log(data);
    })
  }



}
