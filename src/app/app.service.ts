import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/finally';
import { CookieService } from 'ngx-cookie-service';

import { API_URLS } from './config/api.url.config';

@Injectable()
export class AppService {

  authenticated: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  authenticate(credentials, callback) {
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);

      this.http.get(API_URLS.USER_URL).subscribe(response => {
          if (response && response['name']) {
              this.authenticated = true;
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
    return callback && callback();
  }

}
