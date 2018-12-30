import { Injectable } from '@angular/core';

import { API_URLS } from '../config/api.url.config';
import { CrudService } from '../shared/crud.service';

@Injectable()
export class UserService extends CrudService {
  url = API_URLS.USER_CRUD_URL;
}
