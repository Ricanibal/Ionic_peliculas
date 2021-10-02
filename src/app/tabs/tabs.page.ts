import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula, RespuestMDB } from '../Interfaces/interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  peliculaNuevas: Pelicula[] = [];

  constructor(private movieService: MoviesService) {}
 ngOnInit(){
   this.movieService.getFeature().subscribe((resp: RespuestMDB) => {console.log('Resp',resp.results)
   this.peliculaNuevas = resp.results;
  });
 }
}
