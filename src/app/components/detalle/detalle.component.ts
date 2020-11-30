import { Component, Input, OnInit } from '@angular/core';
import { MovieDBService } from '../../services/movie-db.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id:string;
  constructor(private movieService:MovieDBService) { }

  ngOnInit() {
    this.movieService.getDetailsMovie(this.id).subscribe(resp=>{
      console.log('Detalle',resp);
    })
    this.movieService.getCreditsMovie(this.id).subscribe(resp=>{
      console.log('Creditos',resp);
    })
  }

}
