import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiCursosService } from '../../services/api-cursos.service';
import { CursoInterface } from '../../curso-interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: CursoInterface[];
  displayedColumns: string[] = ['nombre', 'director'];
  dataSource = new MatTableDataSource<CursoInterface>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private apiCursosService: ApiCursosService) { }


  ngOnInit() {
    this.getListCursos();
  }

  public getListCursos() {
    let resp = this.apiCursosService.getAllCursos();
    resp.subscribe(cursos => this.dataSource.data = cursos as CursoInterface[])
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

}
