import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlidePosterComponent } from './slide-poster/slide-poster.component';



@NgModule({
  declarations: [SlideShowComponent, SlidePosterComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlideShowComponent,
    SlidePosterComponent
  ]
})
export class ComponentsModule { }
