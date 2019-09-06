import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './authentication/shared/service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private appService: AppService,
              private router: Router){}

  ngOnInit(){
    if(!this.appService.authenticated){
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/home']);
    }
  }

}
