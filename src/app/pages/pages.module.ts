import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ActorComponent } from './actor/actor.component';
import { DirectorComponent } from './director/director.component';
import { MainComponent } from './main/main.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { CPeliculaComponent } from './c-pelicula/c-pelicula.component';



@NgModule({
  declarations: [
    ActorComponent,
    DirectorComponent,
    MainComponent,
    PeliculaComponent,
    PeliculasComponent,
    CPeliculaComponent
  ],
  exports: [
    ActorComponent,
    DirectorComponent,
    MainComponent,
    PeliculaComponent,
    PeliculasComponent,
    CPeliculaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class PagesModule { }
