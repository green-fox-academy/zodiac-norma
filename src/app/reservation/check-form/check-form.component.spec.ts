import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CheckFormComponent } from './check-form.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

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

    it('adult default value should be 1', () => {
        let adultNumber = fixture.nativeElement.querySelector('#adultInput').value;
        expect(adultNumber).toBe('1');
    });

    it ('childrens deafult data is 0', () => {
        let childValue = fixture.nativeElement.querySelector('#childInput')
        expect(childValue.value).toEqual('0');
    })

    it ('data is collected by clicking after changing input values', () => {
        let location = fixture.nativeElement.querySelector('#location')

        location.value = 'Budapest';
        expect(location.value).toEqual('Budapest');
    });
});
