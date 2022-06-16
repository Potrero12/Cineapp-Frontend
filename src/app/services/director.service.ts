import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Director } from '../models/director.model';
import { map } from 'rxjs/operators';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(
    private http: HttpClient
  ) {}

  obtenerDirectores(){
    return this.http.get(`${baseUrl}/director/obtener-directores`)
    .pipe(
      map((resp:{ok:boolean, directorDB:Director[]}) => resp.directorDB)
    );
  }

  crearDirector(director:Director){
    
    return this.http.post(`${baseUrl}/director/crear-director`, director)
  }
}
