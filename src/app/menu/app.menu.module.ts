import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent} from './sidebar/sidebar.component';


@NgModule({
  imports: [RouterModule, BrowserModule],
  declarations: [
    NavbarComponent,
    SidebarComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
  ]
})
export class AppMenuModule{

}
