import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppService } from '../../app.service';

import { TopHotelsComponent } from './top-hotels.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopHotelsComponent', () => {
    let component: TopHotelsComponent;
    let fixture: ComponentFixture<TopHotelsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TopHotelsComponent ],
            imports: [
                HttpModule,
                FormsModule,
                RouterTestingModule
            ],
            providers: [
                AppService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopHotelsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
