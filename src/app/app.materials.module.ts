import { NgModule } from '@angular/core';

import {
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatSnackBarModule,
  MatChipsModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
} from '@angular/material';
const importAndExportModules = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatSnackBarModule,
  MatChipsModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
];

@NgModule({
  imports: importAndExportModules,
  exports: importAndExportModules
})
export class AppMaterialsModule {

}
