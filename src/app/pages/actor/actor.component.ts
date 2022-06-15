import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styles: [
  ]
})
export class ActorComponent implements OnInit {

  constructor(
    private actorService: ActorService,
    private fb: FormBuilder
  ) { }

  public actorForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    edad: ['', Validators.required],
  })

  ngOnInit(): void {
  }

  crearActor(){
    
    this.actorService.crearActor(this.actorForm.value).subscribe(() => {
      Swal.fire('Guarado', 'Actor guardado correctamente', 'success')
    })

    this.actorForm.reset()

  }

}
