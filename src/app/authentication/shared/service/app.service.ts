import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';

import { PrincipalState } from '../principal.state';
import { SAVE_PRINCIPAL } from '../save.principal.action';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated: boolean = false;

  constructor(private http: HttpClient,
      private cookieService: CookieService,
      private store: Store<PrincipalState>) { }

  authenticate(credentials, callback) {
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);

      this.http.get(environment.api_url + '/user').subscribe(response => {
          if (response && response['name']) {
            console.log(response);
              this.authenticated = true;
              this.store.dispatch({
                type: SAVE_PRINCIPAL,
                payload: response
              });

          } else {
              this.authenticated = false;
          }
          return callback && callback();
      });
    }
    else {
      this.authenticated = false;
    }
  }

  logout(callback){
    this.authenticated = false;
    return callback && callback();
  }

}
