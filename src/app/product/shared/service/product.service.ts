import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService{
  url = '/produit';
}
