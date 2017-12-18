import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DlDateTimePickerComponent} from '../dl-date-time-picker.component';
import {By} from '@angular/platform-browser';
import {Component, DebugElement, ViewChild} from '@angular/core';

// keyboard navigation with arrow keys
// keyboard selection (enter)
// what does tab key do?
// screen reader for all cells
// multiple languages



@Component({
  template: '<dl-date-time-picker startView="year"></dl-date-time-picker>'
})
class DlDateTimePickerStartViewYearComponent {
  @ViewChild(DlDateTimePickerComponent) picker: DlDateTimePickerComponent;
}

@Component({
  template: '<dl-date-time-picker startView="month"></dl-date-time-picker>'
})
class DlDateTimePickerStartViewMonthComponent {
  @ViewChild(DlDateTimePickerComponent) picker: DlDateTimePickerComponent;
}

@Component({
  template: '<dl-date-time-picker startView="day"></dl-date-time-picker>'
})
class DlDateTimePickerStartViewDayComponent {
  @ViewChild(DlDateTimePickerComponent) picker: DlDateTimePickerComponent;
}

@Component({
  template: '<dl-date-time-picker startView="hour"></dl-date-time-picker>'
})
class DlDateTimePickerStartViewHourComponent {
  @ViewChild(DlDateTimePickerComponent) picker: DlDateTimePickerComponent;
}

@Component({
  template: '<dl-date-time-picker startView="minute"></dl-date-time-picker>'
})
class DlDateTimePickerStartViewMinuteComponent {
  @ViewChild(DlDateTimePickerComponent) picker: DlDateTimePickerComponent;
}


describe('DlDateTimePickerComponent.startView', () => {

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [
        DlDateTimePickerComponent,
        DlDateTimePickerStartViewYearComponent,
        DlDateTimePickerStartViewMonthComponent,
        DlDateTimePickerStartViewDayComponent,
        DlDateTimePickerStartViewHourComponent,
        DlDateTimePickerStartViewMinuteComponent,
      ]
    })
      .compileComponents();
  }));

  describe('is set to "year"', () => {

    let component: DlDateTimePickerStartViewYearComponent;
    let fixture: ComponentFixture<DlDateTimePickerStartViewYearComponent>;
    let debugElement: DebugElement;
    let nativeElement: any;

    beforeEach(() => {
      fixture = TestBed.createComponent(DlDateTimePickerStartViewYearComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      nativeElement = debugElement.nativeElement;
      fixture.detectChanges();
    });

    it('should start with year view', () => {
      const view = debugElement.query(By.css('.year-view'));
      expect(view).toBeTruthy();
    });

    it('should not have .up-button in year view', () => {
      const upButton = debugElement.query(By.css('.up-button'));
      expect(upButton).toBeNull();

      const view = debugElement.query(By.css('.year-view'));
      expect(view).toBeTruthy();
    });

    it('should change to .month-view when .year element is clicked', () => {
      const years = debugElement.queryAll(By.css('.year'));
      years[1].nativeElement.click();
      fixture.detectChanges();

      const dayView = debugElement.query(By.css('.month-view'));
      expect(dayView).toBeTruthy();
    });
  });

  describe('is set to "month"', () => {

    let component: DlDateTimePickerStartViewMonthComponent;
    let fixture: ComponentFixture<DlDateTimePickerStartViewMonthComponent>;
    let debugElement: DebugElement;
    let nativeElement: any;

    beforeEach(() => {
      fixture = TestBed.createComponent(DlDateTimePickerStartViewMonthComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      nativeElement = debugElement.nativeElement;
      fixture.detectChanges();
    });

    it('should start with month view', () => {
      const view = debugElement.query(By.css('.month-view'));
      expect(view).toBeTruthy();
    });

    it('should change to year view when clicking on .up-button', () => {
      const upView = debugElement.query(By.css('.up-button'));
      upView.nativeElement.click();
      fixture.detectChanges();

      const view = debugElement.query(By.css('.year-view'));
      expect(view).toBeTruthy();
    });

    it('should change to .day-view when .month element is clicked', () => {
      const months = debugElement.queryAll(By.css('.month'));
      months[2].nativeElement.click();
      fixture.detectChanges();

      const dayView = debugElement.query(By.css('.day-view'));
      expect(dayView).toBeTruthy();
    });
  });

  describe('is set to "day"', () => {

    let component: DlDateTimePickerStartViewDayComponent;
    let fixture: ComponentFixture<DlDateTimePickerStartViewDayComponent>;
    let debugElement: DebugElement;
    let nativeElement: any;

    beforeEach(() => {
      fixture = TestBed.createComponent(DlDateTimePickerStartViewDayComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      nativeElement = debugElement.nativeElement;
      fixture.detectChanges();
    });

    it('should start with day view', () => {
      const view = debugElement.query(By.css('.day-view'));
      expect(view).toBeTruthy();
    });

    it('should change to month view when clicking on .up-button', () => {
      const upView = debugElement.query(By.css('.up-button'));
      upView.nativeElement.click();
      fixture.detectChanges();

      const view = debugElement.query(By.css('.month-view'));
      expect(view).toBeTruthy();
    });

    it('should change to .hour-view when .day element is clicked', () => {
      const months = debugElement.queryAll(By.css('.day'));
      months[0].nativeElement.click();
      fixture.detectChanges();

      const dayView = debugElement.query(By.css('.hour-view'));
      expect(dayView).toBeTruthy();
    });
  });

  describe('is set to "hour"', () => {

    let component: DlDateTimePickerStartViewHourComponent;
    let fixture: ComponentFixture<DlDateTimePickerStartViewHourComponent>;
    let debugElement: DebugElement;
    let nativeElement: any;

    beforeEach(() => {
      fixture = TestBed.createComponent(DlDateTimePickerStartViewHourComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      nativeElement = debugElement.nativeElement;
      fixture.detectChanges();
    });
    it('should start with hour view', () => {
      const view = debugElement.query(By.css('.hour-view'));
      expect(view).toBeTruthy();
    });

    it('should change to day view when clicking on .up-button', () => {
      const upView = debugElement.query(By.css('.up-button'));
      upView.nativeElement.click();
      fixture.detectChanges();

      const view = debugElement.query(By.css('.day-view'));
      expect(view).toBeTruthy();
    });

    it('should change to .minute-view when .hour element is clicked', () => {
      const hours = debugElement.queryAll(By.css('.hour'));
      hours[3].nativeElement.click();
      fixture.detectChanges();

      const dayView = debugElement.query(By.css('.minute-view'));
      expect(dayView).toBeTruthy();
    });
  });

  describe('is set to "minute"', () => {

    let component: DlDateTimePickerStartViewMinuteComponent;
    let fixture: ComponentFixture<DlDateTimePickerStartViewMinuteComponent>;
    let debugElement: DebugElement;
    let nativeElement: any;

    beforeEach(() => {
      fixture = TestBed.createComponent(DlDateTimePickerStartViewMinuteComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      nativeElement = debugElement.nativeElement;
      fixture.detectChanges();
    });

    it('should start with minute view', () => {
      const view = debugElement.query(By.css('.minute-view'));
      expect(view).toBeTruthy();
    });

    it('should change to day view when clicking on .up-button', () => {
      const upView = debugElement.query(By.css('.up-button'));
      upView.nativeElement.click();
      fixture.detectChanges();

      const view = debugElement.query(By.css('.hour-view'));
      expect(view).toBeTruthy();
    });

    it('should raise change event when .minute element is clicked', () => {
      const changeSpy = jasmine.createSpy('change listener');
      component.picker.change.subscribe(changeSpy);

      const minutes = debugElement.queryAll(By.css('.minute'));
      minutes[4].nativeElement.click();
      fixture.detectChanges();

      const dayView = debugElement.query(By.css('.minute-view'));
      expect(dayView).toBeTruthy();

      expect(changeSpy).toHaveBeenCalled();

      // expect(nativeElement.dirty)
      //  .toBe(true, `Expected control to become dirty when time was selected by CLICK.`);
    });
  });
});




