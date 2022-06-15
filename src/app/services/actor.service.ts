import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Actor } from '../models/actor.model';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    private http: HttpClient
  ) {}

  crearActor(actor:Actor){
    
    return this.http.post(`${baseUrl}/actor/crear-actor`, actor)
  }
}
