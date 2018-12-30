import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrudService {
  url: string;

  constructor(private http: HttpClient){

  }

  getAll(): Observable<any>{
    return this.http.get(this.url);
  }

  add(entity): Observable<any>{
    return this.http.post(this.url, entity);
  }

  update(entity): Observable<any>{
    return this.http.put(this.url, entity);
  }

  delete(id): Observable<any>{
    return this.http.delete(this.url + `/${id}`);
  }

  addAll(list): Observable<any>{
    return this.http.post(this.url + '/all', list);
  }

}
