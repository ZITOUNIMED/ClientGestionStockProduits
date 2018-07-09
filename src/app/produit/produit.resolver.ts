import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { ProduitService } from './produit.service';

@Injectable()
export class ProduitResolver implements Resolve<any>{

  constructor(private produitService:ProduitService){

  }
  resolve(){
    return this.produitService.getAll();
  }
}
