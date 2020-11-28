import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  baseUrl = '';
  apiKey = '08142d9351171e224683a4c8cfe1c85f';
  constructor(private http:HttpClient) { }


  getMoviesPremiere(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-07-01&primary_release_date.lte=2021-01-31&api_key=08142d9351171e224683a4c8cfe1c85f&language=es&include_image_language=es')
  }
}
