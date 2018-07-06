import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './app.service';

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
      this.router.navigateByUrl('/login');
    }
    else {
        this.router.navigateByUrl('/home');
    }
  }

}
