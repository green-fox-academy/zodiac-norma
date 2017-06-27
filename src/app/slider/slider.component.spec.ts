import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ElementRef } from '@angular/core';

import { AppService } from '../app.service';

import { SliderComponent } from './slider.component';

import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SliderComponent', () => {
    let component: SliderComponent;
    let fixture: ComponentFixture<SliderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SliderComponent ],
            imports: [
                HttpModule,
                FormsModule,
                RouterTestingModule
            ],
            providers: [
                AppService,
                Http
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
