import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService {
  url = '/crud_user';
}
