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
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/cursos?access_token=${token}`;
    return this.http.post<CursoInterface>(url_api, curso, {headers: this.headers})
    .pipe(map(data => data))
  }

  updateCurso(curso: { cursoId: any; }){
    //TODO: obtener token
    //TODO: not null
    const cursoId = curso.cursoId;
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/cursos/${cursoId}?access_token=${token}`;
    return this.http.put<CursoInterface>(url_api, curso, {headers: this.headers})
    .pipe(map(data => data))
  }

  deleteCurso(id: string){
    //TODO: obtener token
    //TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/cursos/${id}/?access_token=${token}`;
    return this.http.delete<CursoInterface>(url_api, {headers: this.headers})
    .pipe(map(data => data))
  }
}

/*mport { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'

import { BookInterface } from '../models/book-interface';
import { AuthService} from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  books: Observable<any>;
  book: Observable<any>;

  public selectedBook: BookInterface = {
    id: null,
    titulo:'',
    idioma:'',
    descripcion:'',
    portada:'',
    precio:'',
    link_amazon:'',
    autor:'',
    oferta:''
  };

  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.authService.getToken(),
  })


  getAllBooks(){
    const url_api = `http://localhost:3000/api/books`;
    return this.http.get(url_api);
 }

 getNotOffers(){
  const url_api = `http://localhost:3000/api/books?filter[where][oferta]=0`;
  return this.http.get(url_api);
}

 //http://localhost:3000/api/books/5f0a9e326d9be729e0e713f2
 getBookById(id: string){
  const url_api = `http://localhost:3000/api/books/${id}`;
  return (this.book = this.http.get(url_api));
}

getOffers(){
  const url_api = `http://localhost:3000/api/books?filter[where][oferta]=1`;
  return (this.book = this.http.get(url_api));
}

saveBook(book: BookInterface){
  //TODO: obtener token
  //TODO: not null
  let token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/books?access_token=${token}`;
  return this.http
  .post<BookInterface>(url_api, book,{headers: this.headers})
  .pipe(map(data => data));
}

updateBook(book: { bookId: any; }){
  //TODO: obtener token
  //TODO: not null
  let bookId = book.bookId;
  let token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/books/${bookId}/?access_token=${token}`;
  return this.http
  .put<BookInterface>(url_api, book,{headers: this.headers})
  .pipe(map(data => data));
}

deleteBook(id: string){
  //TODO: obtener token
  //TODO: not null
  let token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/books/${id}/?access_token=${token}`;
  return this.http
  .delete<BookInterface>(url_api, {headers: this.headers})
  .pipe(map(data => data));
}

}*/
