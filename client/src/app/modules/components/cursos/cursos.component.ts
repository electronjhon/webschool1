import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiCursosService } from '../../services/api-cursos.service';
import { CursoInterface } from '../../curso-interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: CursoInterface[];
  displayedColumns: string[] = ['nombre', 'director', 'actions'];
  dataSource = new MatTableDataSource<CursoInterface>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private apiCursosService: ApiCursosService, public dialog: MatDialog) { }


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

  onEditCurso(curso: CursoInterface) {
    console.log('Editar curso', curso);
  }

  onDeleteCurso(curso: CursoInterface) {
    console.log('Borrar curso', curso);
  }
  
  onNewCurso() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`resultaddo ${result}`);
    })
  }

}
