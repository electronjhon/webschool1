import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { ApiCursosService } from '../../services/api-cursos.service';
import { CursoInterface } from '../../curso-interface'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {
  ELEMENT_DATA : CursoInterface[];
  displayedColumns: string[] = ['position','nombre', 'director', 'actions'];
  dataSource = new MatTableDataSource<CursoInterface>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private apiCursos: ApiCursosService) { }

  ngOnInit(): void {
    this.getListCursos();
    this.dataSource.paginator = this.paginator;
  }

  getListCursos(): void {
    this.apiCursos.getAllCursos()
    .subscribe(report=>this.dataSource.data=report as CursoInterface[]);
  }

  
}