import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespTMDB } from '../models/movie.model';
import { environment } from '../../environments/environment';

const baseUrlTMDB = environment.baseUrlApi;
const keyApi = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  constructor(private http: HttpClient) { }

  private getQuery<T>(query: string) {
    query = baseUrlTMDB + query;
    return this.http.get<T>(query);
  }

  getNowPlaying() {
    return this.getQuery<RespTMDB>(`/movie/now_playing?api_key=${keyApi}&language=es-Es`);
  }


  getMovieUpcoming() {
    return this.getQuery<RespTMDB>(`/movie/upcoming?api_key=${keyApi}&language=es-Es`)
  }

  getMoviePopular() {
    return this.getQuery<RespTMDB>(`/movie/popular?api_key=${keyApi}&language=es-ES`)
  }

  getMovieCategories() {
    return this.getQuery<RespCategoria>(`/genre/movie/list?api_key=${keyApi}&language=es-ES`)
  }
}
