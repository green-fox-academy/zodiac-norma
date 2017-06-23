import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CheckFormComponent } from './check-form.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheckFormComponent', () => {
  let component: CheckFormComponent;
  let fixture: ComponentFixture<CheckFormComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFormComponent ],
      imports: [
        HttpModule, 
        MyDatePickerModule, 
        FormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('room default value should be 1', () => {
    let roomNumber = fixture.nativeElement.querySelector('.room.input').value;
    expect(roomNumber).toBe('1');
  });
  
  it('adult default value should be 1', () => {
    let adultNumber = fixture.nativeElement.querySelector('.adult.input').value;
    expect(adultNumber).toBe('1');
  });

  it ('default data is collected by clicking', () => {
    let updateButton = fixture.nativeElement.querySelector('.button')
    expect(component.allInputs).toEqual([])
    
    updateButton.click();
    fixture.detectChanges();

    expect(component.allInputs).toEqual(['','','1','1','0']);
  })

  it ('data is collected by clicking after changing input values', () => {
    let updateButton = fixture.nativeElement.querySelector('.button')
    let roomNumber = fixture.nativeElement.querySelector('.room.input');
    let adultNumber = fixture.nativeElement.querySelector('.adult.input');
    let childrenNumber = fixture.nativeElement.querySelector('.children.input');
    console.log(updateButton);
    
    roomNumber.value = 2;
    adultNumber.value = 2;
    childrenNumber.value = 3;

    updateButton.click();
    fixture.detectChanges();
    expect(component.allInputs).toEqual(['','','2','2','3']);
  });

  it('should return empty strings for invalid inputs ', () => {
  
  let checkinInput = fixture.nativeElement.querySelector('.checkin');
  let updateButton = fixture.nativeElement.querySelector('.button')
  let checkinOutput = fixture.nativeElement.querySelector('.checkout');

  checkinInput.value = 'jn;kvngmd';
  checkinOutput.value = null;
  updateButton.click();
  fixture.detectChanges();
  
  expect(component.allInputs.slice(0,2)).toEqual(['','']);

  checkinInput.value = 563746;
  checkinOutput.value = undefined;
  updateButton.click();
  fixture.detectChanges();
  expect(component.allInputs.slice(0,2)).toEqual(['','']);

  });
});
