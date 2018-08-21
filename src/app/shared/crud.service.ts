import { Observable } from 'rxjs/Observable';

export interface CrudService {
  getAll(): Observable<any>;

  add(produit): Observable<any>;

  update(produit): Observable<any>;

  delete(id): Observable<any>;

  addAll(list): Observable<any>;
}
