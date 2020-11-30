import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SlidePosterComponent } from './slide-poster/slide-poster.component';
import { SlidePosterParesComponent } from './slide-poster-pares/slide-poster-pares.component';
import { SlideCategoriasComponent } from './slide-categorias/slide-categorias.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    SlideShowComponent,
    SlidePosterComponent,
    SlidePosterParesComponent,
    SlideCategoriasComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlideShowComponent,
    SlidePosterComponent,
    SlidePosterParesComponent,
    SlideCategoriasComponent,
    DetalleComponent
  ]
})
export class ComponentsModule { }
