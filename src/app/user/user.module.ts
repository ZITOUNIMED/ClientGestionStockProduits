import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ReactiveFormsModule,
  SharedModule],
  declarations: [
    UserComponent
  ]
})
export class UserModule{

}
