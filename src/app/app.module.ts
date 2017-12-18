import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DlDateTimePickerComponent } from './lib/dl-date-time-picker/dl-date-time-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    DlDateTimePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent],
  exports: [DlDateTimePickerComponent]
})
export class AppModule { }
