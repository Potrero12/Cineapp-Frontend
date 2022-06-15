import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Pelicula } from '../models/pelicula.model';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(
    private http: HttpClient
  ) {
  }

  obtenerPeliculas(){
    
    return this.http.get(`${baseUrl}/pelicula/obtener-peliculas`)
      .pipe(
        map((resp:{ok:boolean, peliculaDB:Pelicula[]}) => resp.peliculaDB)
      )

  }

  obtenerPeliculasId(id:string){
    return this.http.get(`${baseUrl}/pelicula/obtener-peliculas/${id}`).pipe(
      map((resp: {ok: true, pelicula:Pelicula}) => resp.pelicula)
    )
  }


}
