import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent} from './sidebar/sidebar.component';
import { ContentComponent} from './content/content.component';
//import { AppRoutingModule } from '../app.routing.module';


@NgModule({
  imports: [],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ContentComponent
  ]
})
export class AppMenuModule{

}
