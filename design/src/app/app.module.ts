import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule}from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { MockAddComponent } from './mock-add/mock-add.component';
import { DialogComponenetComponent } from './dialog-componenet/dialog-componenet.component';
import { MatDialog } from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    MockAddComponent,
    DialogComponenetComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
   
   
    
  ],
  entryComponents:[DialogComponenetComponent],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
