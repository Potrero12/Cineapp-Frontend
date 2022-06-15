import { Component, OnInit } from '@angular/core';

import { PeliculaService } from '../../services/pelicula.service';

import { Pelicula } from '../../models/pelicula.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  public Peliculas:Pelicula;


  constructor(
    private peliculaService: PeliculaService,
    private activateRoute:ActivatedRoute
  ) { }


  ngOnInit(): void {

    this.activateRoute.params.subscribe(({id}) => this.obtenerPeliculaId(id));
  }
  
  obtenerPeliculaId(id:string){
    this.peliculaService.obtenerPeliculasId(id).subscribe((pelicula) => {
      console.log(pelicula)
      this.Peliculas = pelicula
    })
  }



}
