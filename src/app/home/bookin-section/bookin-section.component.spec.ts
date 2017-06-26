import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinSectionComponent } from './bookin-section.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookinSectionComponent', () => {
    let component: BookinSectionComponent;
    let fixture: ComponentFixture<BookinSectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BookinSectionComponent ],
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
        fixture = TestBed.createComponent(BookinSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
