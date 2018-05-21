import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { API_URLS} from '../config/api.url.config';
import { Produit } from '../shared/produit';

@Injectable()
export class ProduitService{

  constructor(private http: HttpClient){

  }

  getProduits(): Observable<any>{
    return this.http.get(API_URLS.PRODUITS_URL);
  }

  addProduit(produit:Produit): Observable<any>{
    return this.http.post(API_URLS.PRODUITS_URL, produit);
  }

  updateProduit(produit: Produit): Observable<any>{
    return this.http.put(API_URLS.PRODUITS_URL, produit);
  }

  deleteProduit(id:number): Observable<any>{
    return this.http.delete(API_URLS.PRODUITS_URL + `/${id}`);
  }




}
