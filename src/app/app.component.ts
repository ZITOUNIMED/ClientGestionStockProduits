import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHideSideBar: boolean = false;

  onShowSideBarChange(_showHideSideBar){
    this.showHideSideBar = _showHideSideBar;
  }
}
