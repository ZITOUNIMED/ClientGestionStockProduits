import { Injectable } from '@angular/core';

import { API_URLS } from '../config/api.url.config';
import { CrudService } from '../shared/crud.service';

@Injectable()
export class ProduitService extends CrudService{
  url = API_URLS.PRODUITS_URL;
}
