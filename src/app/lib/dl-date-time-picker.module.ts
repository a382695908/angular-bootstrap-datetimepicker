import {NgModule} from '@angular/core';
import {DlDateTimePickerComponent} from './dl-date-time-picker/dl-date-time-picker.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [DlDateTimePickerComponent],
  imports: [CommonModule],
  exports: [DlDateTimePickerComponent]
})
export class DlDateTimePickerModule {}
