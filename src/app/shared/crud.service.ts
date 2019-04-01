import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class CrudService {
  url: string;

  constructor(private http: HttpClient){

  }

  getAll(): Observable<any>{
    return this.http.get(environment.api_url + this.url);
  }

  add(entity): Observable<any>{
    return this.http.post(environment.api_url + this.url, entity);
  }

  update(entity): Observable<any>{
    return this.http.put(environment.api_url + this.url, entity);
  }

  delete(id): Observable<any>{
    return this.http.delete(environment.api_url + this.url + `/${id}`);
  }

  addAll(list): Observable<any>{
    return this.http.post(environment.api_url + this.url + '/all', list);
  }

}
