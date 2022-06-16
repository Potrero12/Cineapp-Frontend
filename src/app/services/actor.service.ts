import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Actor } from '../models/actor.model';
import { map } from 'rxjs/operators';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    private http: HttpClient
  ) {}

  obtenerActores(){
    return this.http.get(`${baseUrl}/actor/obtener-actores`)
    .pipe(
      map((resp:{ok:boolean, actoresDB:Actor[]}) => resp.actoresDB)
    );
  }

  crearActor(actor:Actor){
    
    return this.http.post(`${baseUrl}/actor/crear-actor`, actor)
  }
}
