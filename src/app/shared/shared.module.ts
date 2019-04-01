import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CrudComponent } from './crud/crud.component';
import { SampleComponent } from './crud/sample/sample.component';
import { UploadComponent } from './crud/upload/upload.component';

@NgModule({
  imports: [ReactiveFormsModule, BrowserModule],
  declarations: [
    CrudComponent,
    SampleComponent,
    UploadComponent
  ],
  exports: [CrudComponent,
  SampleComponent,
  UploadComponent]
})
export class SharedModule{

}
