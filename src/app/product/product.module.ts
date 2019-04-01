import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ReactiveFormsModule,
  SharedModule],
  declarations: [
    ProductComponent
  ]
})
export class ProductModule{

}
