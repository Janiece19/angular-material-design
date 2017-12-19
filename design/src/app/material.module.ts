import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
   MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatDialogModule

} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogModule
    
    
    
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogModule
   
    
  ]
})
export class MaterialModule {}