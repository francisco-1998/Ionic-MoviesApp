import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespTMDB } from '../models/movie.model';
import { environment } from '../../environments/environment';
import { PeliculaDetalle, RespuestaCredits } from '../models/detalle.model';

const baseUrlTMDB = environment.baseUrlApi;
const keyApi = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  pages:number = 0;

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
    this.pages++;
    return this.getQuery<RespTMDB>(`/movie/popular?api_key=${keyApi}&language=es-ES&page=${this.pages}`)
  }

  getMovieCategories() {
    return this.getQuery<RespCategoria>(`/genre/movie/list?api_key=${keyApi}&language=es-ES`)
  }

  getDetailsMovie(id){
    return this.getQuery<PeliculaDetalle>(`/movie/${id}?api_key=${keyApi}&language=es-Es`)
  }

  getCreditsMovie(id){
    return this.getQuery<RespuestaCredits>(`/movie/${id}/credits?api_key=${keyApi}&language=es-Es`)
  }
}
