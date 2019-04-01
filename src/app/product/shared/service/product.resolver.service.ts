import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any>{

  constructor(private productService:ProductService){

  }
  resolve(){
    return this.productService.getAll();
  }
}
