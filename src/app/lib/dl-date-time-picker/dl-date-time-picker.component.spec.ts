import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlDateTimePickerComponent } from './dl-date-time-picker.component';

describe('DlDateTimePickerComponent', () => {
  let component: DlDateTimePickerComponent;
  let fixture: ComponentFixture<DlDateTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlDateTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
