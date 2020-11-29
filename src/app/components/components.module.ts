import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SlidePosterComponent } from './slide-poster/slide-poster.component';
import { SlidePosterParesComponent } from './slide-poster-pares/slide-poster-pares.component';



@NgModule({
  declarations: [
    SlideShowComponent,
    SlidePosterComponent,
    SlidePosterParesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlideShowComponent,
    SlidePosterComponent,
    SlidePosterParesComponent
  ]
})
export class ComponentsModule { }
