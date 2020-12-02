import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { timeStamp } from 'console';
import { PeliculaDetalle } from '../models/detalle.model';

@Injectable({
  providedIn: 'root'
})
export class DataSqlLiteService {

  arregloPeliculas: PeliculaDetalle[] = [];
  mensaje:string = '';
  

  constructor(private storage: Storage, public toastCtrl: ToastController) { 
      this.cargarFavoritos();
  }


  async cargarFavoritos(){
    const favoritos = await this.storage.get('favoritos');
    this.arregloPeliculas = favoritos || [];
    return this.arregloPeliculas;
  }

  async existePelicula(id){
    id = Number(id);
    await this.cargarFavoritos();
    const existe = this.arregloPeliculas.find(peli=>peli.id === id);
    if (existe) {
      return true;
    } else {
      return false;
    }
  }

  guardarFavorito(pelicula: PeliculaDetalle) {
    let esFav = false;
    const existe = this.arregloPeliculas.find(noti => noti.id === pelicula.id);

    if (!existe) {
      this.arregloPeliculas.unshift(pelicula);
      this.mensaje = 'Añadida a favoritas'
      esFav = true
    }else{
      const temp = this.arregloPeliculas.filter(peli=>peli.id !== pelicula.id);
      this.arregloPeliculas = temp;
      this.mensaje = 'Removida de favoritos';
      esFav = false;
    }

    this.storage.set('favoritos', this.arregloPeliculas);
    this.presentToast(this.mensaje)

    return esFav;
  }

  async presentToast(message:string) {
    const toast = await this.toastCtrl.create({
      message: message,
      color: 'tertiary',
      position: 'top',
      duration: 1500
    });
    toast.present();
  }
}
