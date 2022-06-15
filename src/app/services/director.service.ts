import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Director } from '../models/director.model';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(
    private http: HttpClient
  ) {
  }

  crearDirector(director:Director){
    
    return this.http.post(`${baseUrl}/director/crear-director`, director)
  }
}
