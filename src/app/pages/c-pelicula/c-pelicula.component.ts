import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Validators, FormBuilder } from '@angular/forms';

import { PeliculaService } from '../../services/pelicula.service';
import { ActorService } from '../../services/actor.service';
import { DirectorService } from '../../services/director.service';

import { Pelicula } from '../../models/pelicula.model';
import { Actor } from '../../models/actor.model';
import { Director } from '../../models/director.model';

@Component({
  selector: 'app-c-pelicula',
  templateUrl: './c-pelicula.component.html',
  styles: [
  ]
})
export class CPeliculaComponent implements OnInit {

  public peliculas:Pelicula[] = []
  public actores:Actor[] = []
  public directores:Director[] = []

  constructor(
    private peliculaService: PeliculaService,
    private actoresService: ActorService,
    private directoresService: DirectorService,
    private fb: FormBuilder
  ) { }

  public peliculaForm = this.fb.group({
    nombre: ['', Validators.required],
    genero: ['', Validators.required],
    duracion: ['', Validators.required],
    actor: ['', Validators.required],
    director: ['', Validators.required],
  })

  ngOnInit(): void {

    this.cargarActores();
    this.cargarDirectores();
  }

  cargarActores(){
    this.actoresService.obtenerActores().subscribe((actores) => {
      this.actores = actores
    })
  }

  cargarDirectores(){
    this.directoresService.obtenerDirectores().subscribe((directores) => {
      this.directores = directores
    })
  }

  crearPelicula(){
  
    console.log(this.peliculaForm.value)

    this.peliculaService.crearPelicula(this.peliculaForm.value).subscribe(() => {
      Swal.fire('Guarado', 'Actor guardado correctamente', 'success')
    })

    this.peliculaForm.reset()

  }

}
