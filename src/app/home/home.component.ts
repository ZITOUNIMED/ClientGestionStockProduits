import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showHideSideBar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }

}
