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
    query += `&api_key=${keyApi}&language=es&include_image_language=es`;
    // console.log(query);
    return this.http.get<T>(query);
  }

  getMoviesPremiere() {

    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;

    if (mes < 10) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.getQuery<RespTMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }
}
