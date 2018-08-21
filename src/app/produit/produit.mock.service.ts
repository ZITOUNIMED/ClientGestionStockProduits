import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit.model';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { CrudService } from '../shared/crud.service';

@Injectable()
export class ProduitMockService implements CrudService{

  private PRODUITS: Produit[] = [];

  constructor(){
    let p1: Produit = new Produit(1,'Livre', 50, 20);
    let p2: Produit = new Produit(2,'Cahier', 200, 5.25);
    let p3: Produit = new Produit(3,'Stylo', 500, 2.10);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
  }

  getAll(): Observable<any>{
    return of(this.PRODUITS);
  }

  add(produit): Observable<any>{
    return of('success');
  }

  update(produit): Observable<any>{
    return of('success');
  }

  delete(id): Observable<any>{
    return of('success');
  }


  addAll(list): Observable<any>{
    return of('success');
  }



}
