import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [
    LoginComponent
  ]
})
export class AuthenticationModule{

}
