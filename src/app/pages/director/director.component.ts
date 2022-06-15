import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../../services/director.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styles: [
  ]
})
export class DirectorComponent implements OnInit {

  constructor(
    private directorService: DirectorService,
    private fb: FormBuilder
  ) { }

  public directorForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    edad: ['', Validators.required],
  })

  ngOnInit(): void {
  }

  crearDirector(){
    
    this.directorService.crearDirector(this.directorForm.value).subscribe(() => {
      Swal.fire('Guarado', 'Director guardado correctamente', 'success')
    })

    this.directorForm.reset();

  }

}
