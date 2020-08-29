import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CursoInterface } from '../../../curso-interface';
import { ApiCursosService } from '../../../services/api-cursos.service';

@Component({
  selector: 'app-nvocurso',
  templateUrl: './nvocurso.component.html',
  styleUrls: ['./nvocurso.component.scss']
})
export class NvocursoComponent implements OnInit {

  constructor(private apiCursosService: ApiCursosService) { }

  public newCursoForm = new FormGroup({
   nombre: new FormControl( '', Validators.required),
   director: new FormControl( '', Validators.required),
  })

 
  ngOnInit(): void {
  }

  addNewCurso(data: CursoInterface){
    console.log('Nuevo curso', data)
  }
}
