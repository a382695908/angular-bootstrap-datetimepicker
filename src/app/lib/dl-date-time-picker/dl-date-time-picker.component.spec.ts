import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DlDateTimePickerComponent} from './dl-date-time-picker.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import moment = require('moment');

// keyboard navigation with arrow keys
// keyboard selection (enter)
// what does tab key do?
// screen reader for all cells
// multiple languages
// format for up-button text
// footer content (today button example)
// left, right, and up icon templates (and examples if using font-awesome, etc)
// Generic type for the class

describe('DlDateTimePickerComponent default configuration', () => {
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

  it('should start with day view', () => {
    const dayView = fixture.debugElement.query(By.css('.day-view'));
    expect(dayView).toBeTruthy();
  });

  it('should change to .month-view when .up-button element is clicked after drilling up through all views', () => {
    const upView = fixture.debugElement.query(By.css('.up-button'));
    upView.nativeElement.click();
    fixture.detectChanges();

    const monthView = fixture.debugElement.query(By.css('.month-view'));
    expect(monthView).toBeTruthy();

    const upButton = fixture.debugElement.query(By.css('.up-button')).nativeElement;
    const text = moment().format('YYYY');
    expect(upButton.textContent.trim()).toMatch(new RegExp(`^${text}*`));
  });

  it('should change to .year-view when .up-button element is clicked after drilling up through all views', () => {
    const upView = fixture.debugElement.query(By.css('.up-button'));
    upView.nativeElement.click();
    fixture.detectChanges();

    const dayView = fixture.debugElement.query(By.css('.day-view'));
    expect(dayView).toBeFalsy();

    const monthView = fixture.debugElement.query(By.css('.month-view'));
    expect(monthView).toBeTruthy();

    upView.nativeElement.click();
    fixture.detectChanges();

    let yearView = fixture.debugElement.query(By.css('.year-view'));
    expect(yearView).toBeTruthy();

    // nothing should happen when clicking up-button in year-view
    upView.nativeElement.click();
    fixture.detectChanges();

    yearView = fixture.debugElement.query(By.css('.year-view'));
    expect(yearView).toBeTruthy();
  });

  it('should raise change event when .minute element is clicked after drilling down through all views', () => {
    const changeSpy = jasmine.createSpy('change listener');
    component.change.subscribe(changeSpy);

    const days = fixture.debugElement.queryAll(By.css('.day'));
    days[0].nativeElement.click();
    fixture.detectChanges();

    const hourView = fixture.debugElement.query(By.css('.hour-view'));
    expect(hourView).toBeTruthy();
    expect(changeSpy).not.toHaveBeenCalled();

    const hours = fixture.debugElement.queryAll(By.css('.hour'));
    hours[0].nativeElement.click();
    fixture.detectChanges();

    const minuteView = fixture.debugElement.query(By.css('.minute-view'));
    expect(minuteView).toBeTruthy();
    expect(changeSpy).not.toHaveBeenCalled();

    const minutes = fixture.debugElement.queryAll(By.css('.minute'));
    minutes[0].nativeElement.click();
    fixture.detectChanges();

    expect(changeSpy).toHaveBeenCalled();

    // expect(nativeElement.dirty)
    //  .toBe(true, `Expected control to become dirty when time was selected by CLICK.`);

    // should also revert back to day view.
    const dayView = fixture.debugElement.query(By.css('.day-view'));
    expect(dayView).toBeTruthy();
  });

  it('should have .up-button label matching this month', () => {
    const upButton = fixture.debugElement.query(By.css('.up-button')).nativeElement;
    const text = moment().format(component.dayViewLabelFormat);
    expect(upButton.textContent.trim()).toMatch(new RegExp(`^${text}*`));
  });

  it('should have 42 .day elements', () => {
    const dayElements = fixture.debugElement.queryAll(By.css('.day'));
    expect(dayElements.length).toBe(42);
  });

  it('should have 5 .past elements', () => {
    const pastElements = fixture.debugElement.queryAll(By.css('.past'));
    expect(pastElements.length).toBe(5);
  });

  it('should have 6 .future elements', () => {
    const futureElements = fixture.debugElement.queryAll(By.css('.future'));
    expect(futureElements.length).toBe(6);
  });

  // it('should change to the previous month when .previous-button is clicked', () => {
  //   let previousButton = fixture.debugElement.query(By.css('.previous-button'));
  //   previousButton.nativeElement.click();
  //   fixture.detectChanges();
  //   let upView = fixture.debugElement.query(By.css('.up-button')).nativeElement;
  //   expect(upView.textContent).toBe('2017-Nov') //(moment().subtract(1, 'month').format('YYYY-MMM'));
  // })
});
