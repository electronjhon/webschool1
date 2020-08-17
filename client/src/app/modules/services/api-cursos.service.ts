import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'

import { CursoInterface } from '../curso-interface'
import { AuthService } from '../../User/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class ApiCursosService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  cursos: Observable<any>;
  curso: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    "Content-type": "aplicattion/json",
    Authorization: this.authService.getToken(),
  })

  getAllCursos() {
    const url_api = 'http://localhost:3000/api/cursos';
    return this.http.get(url_api);
  }

  getCursoById(id: string) {
    const url_api = `http://localhost:3000/api/cursos/${id}`
    return (this.curso = this.http.get(url_api))
  }

  saveCurso(curso: CursoInterface){
    //TODO: obtener token
    //TODO: not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/cursos?access_token=${token}`;
    return this.http.post<CursoInterface>(url_api, curso, {headers: this.headers})
    .pipe(map(data => data))
  }

  updateCurso(curso){
    //TODO: obtener token
    //TODO: not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/cursos?access_token=${token}`;
    return this.http.put<CursoInterface>(url_api, curso, {headers: this.headers})
    .pipe(map(data => data))
  }

  deleteCurso(id: string){
    //TODO: obtener token
    //TODO: not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/cursos?access_token=${token}`;
    return this.http.delete<CursoInterface>(url_api, {headers: this.headers})
    .pipe(map(data => data))
  }
}
