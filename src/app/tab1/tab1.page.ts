import { Component, OnInit } from '@angular/core';
import { Pelicula, RespuestMDB } from '../Interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculaNuevas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.39,
    freeMode: true,
  }

  constructor(private movieService: MoviesService) {}
  ngOnInit(){
    this.movieService.getFeature().subscribe( resp => {
      console.log(resp)
      this.peliculaNuevas = resp.results;
    });
 }

}
