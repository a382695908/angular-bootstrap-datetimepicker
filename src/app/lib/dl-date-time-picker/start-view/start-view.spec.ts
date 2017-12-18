import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DlDateTimePickerComponent} from '../dl-date-time-picker.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

// keyboard navigation with arrow keys
// keyboard selection (enter)
// what does tab key do?
// screen reader for all cells
// multiple languages

describe('DlDateTimePickerComponent.startView', () => {
  let component: DlDateTimePickerComponent;
  let fixture: ComponentFixture<DlDateTimePickerComponent>;
  let debugElement: DebugElement;
  let nativeElement: any;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [DlDateTimePickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlDateTimePickerComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  describe('is set to "year"', () => {
    beforeEach(() => {
      component.startView = 'year';
      fixture.detectChanges();
    });

    it('should start with year view', () => {
      let view = fixture.debugElement.query(By.css('.year-view'));
      expect(view).toBeTruthy();
    });

    it('should not change the view when clicking on .up-view', () => {
      let upView = fixture.debugElement.query(By.css('.up-view'));
      upView.nativeElement.click();
      fixture.detectChanges();

      let view = fixture.debugElement.query(By.css('.year-view'));
      expect(view).toBeTruthy();
    });

    it('should change to .month-view when .year element is clicked', () => {
      let years = fixture.debugElement.queryAll(By.css('.year'));
      years[1].nativeElement.click();
      fixture.detectChanges();

      let dayView = fixture.debugElement.query(By.css('.month-view'));
      expect(dayView).toBeTruthy();
    });
  });

  describe('is set to "month"', () => {
    beforeEach(() => {
      component.startView = 'month';
      fixture.detectChanges();
    });

    it('should start with month view', () => {
      let view = fixture.debugElement.query(By.css('.month-view'));
      expect(view).toBeTruthy();
    });

    it('should change to year view when clicking on .up-view', () => {
      let upView = fixture.debugElement.query(By.css('.up-view'));
      upView.nativeElement.click();
      fixture.detectChanges();

      let view = fixture.debugElement.query(By.css('.year-view'));
      expect(view).toBeTruthy();
    });

    it('should change to .day-view when .month element is clicked', () => {
      let months = fixture.debugElement.queryAll(By.css('.month'));
      months[2].nativeElement.click();
      fixture.detectChanges();

      let dayView = fixture.debugElement.query(By.css('.day-view'));
      expect(dayView).toBeTruthy();
    });
  });

  describe('is set to "day"', () => {
    beforeEach(() => {
      component.startView = 'day';
      fixture.detectChanges();
    });

    it('should start with day view', () => {
      let view = fixture.debugElement.query(By.css('.day-view'));
      expect(view).toBeTruthy();
    });

    it('should change to month view when clicking on .up-view', () => {
      let upView = fixture.debugElement.query(By.css('.up-view'));
      upView.nativeElement.click();
      fixture.detectChanges();

      let view = fixture.debugElement.query(By.css('.month-view'));
      expect(view).toBeTruthy();
    });

    it('should change to .hour-view when .day element is clicked', () => {
      let months = fixture.debugElement.queryAll(By.css('.day'));
      months[0].nativeElement.click();
      fixture.detectChanges();

      let dayView = fixture.debugElement.query(By.css('.hour-view'));
      expect(dayView).toBeTruthy();
    });
  });

  describe('is set to "hour"', () => {
    beforeEach(() => {
      component.startView = 'hour';
      fixture.detectChanges();
    });

    it('should start with hour view', () => {
      let view = fixture.debugElement.query(By.css('.hour-view'));
      expect(view).toBeTruthy();
    });

    it('should change to day view when clicking on .up-view', () => {
      let upView = fixture.debugElement.query(By.css('.up-view'));
      upView.nativeElement.click();
      fixture.detectChanges();

      let view = fixture.debugElement.query(By.css('.day-view'));
      expect(view).toBeTruthy();
    });

    it('should change to .minute-view when .hour element is clicked', () => {
      let hours = fixture.debugElement.queryAll(By.css('.hour'));
      hours[3].nativeElement.click();
      fixture.detectChanges();

      let dayView = fixture.debugElement.query(By.css('.minute-view'));
      expect(dayView).toBeTruthy();
    });
  });

  describe('is set to "minute"', () => {
    beforeEach(() => {
      component.startView = 'minute';
      fixture.detectChanges();
    });

    it('should start with hour view', () => {
      let view = fixture.debugElement.query(By.css('.minute-view'));
      expect(view).toBeTruthy();
    });

    it('should change to day view when clicking on .up-view', () => {
      let upView = fixture.debugElement.query(By.css('.up-view'));
      upView.nativeElement.click();
      fixture.detectChanges();

      let view = fixture.debugElement.query(By.css('.hour-view'));
      expect(view).toBeTruthy();
    });

    it('should raise change event when .minute element is clicked', () => {
      let changeSpy = jasmine.createSpy('change listener');
      component.change.subscribe(changeSpy);

      let minutes = fixture.debugElement.queryAll(By.css('.minute'));
      minutes[4].nativeElement.click();
      fixture.detectChanges();

      let dayView = fixture.debugElement.query(By.css('.minute-view'));
      expect(dayView).toBeTruthy();

      expect(changeSpy).toHaveBeenCalled();

      //expect(nativeElement.dirty)
      //  .toBe(true, `Expected control to become dirty when time was selected by CLICK.`);
    });
  });
});
