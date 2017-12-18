import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ReactiveFormsModule}from '@angular/forms';

import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { MockAddComponent } from './mock-add/mock-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    MockAddComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
