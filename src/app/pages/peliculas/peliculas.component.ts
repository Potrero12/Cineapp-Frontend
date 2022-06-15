import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { delay } from 'rxjs/operators';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: [
  ]
})
export class PeliculasComponent implements OnInit {

  public peliculas:Pelicula[] = [];

  constructor(
    private peliculaService:PeliculaService,
  ) { }

  ngOnInit(): void {
    this.obtenerPelicula();
  }

  obtenerPelicula(){
    this.peliculaService.obtenerPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas
      console.log(peliculas)
    });
  }

  obtenerPeliculaPorID(id:string){
    this.peliculaService.obtenerPeliculasId(id).subscribe((resp) => {
      console.log(resp)
    })
  }




}
