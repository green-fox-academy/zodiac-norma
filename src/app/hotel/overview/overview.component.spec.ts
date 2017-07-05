import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';

import { AppService } from '../../app.service';

import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { NgBoxModule } from 'ngbox/ngbox.module';
import { NgBoxService } from 'ngbox/ngbox.service';
import { SimpleHeaderComponent } from '../../reservation/simple-header/simple-header.component';
import { HotelSubmenuComponent } from '../hotel-submenu/hotel-submenu.component';

describe('OverviewComponent', () => {
    let component: OverviewComponent;
    let fixture: ComponentFixture<OverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OverviewComponent, SimpleHeaderComponent, HotelSubmenuComponent ],
            imports: [
                HttpModule,
                FormsModule,
                RouterTestingModule,
                NgBoxModule,
            ],
            providers: [ AppService, NgBoxService ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should be created', () => {
    //     expect(component).toBeTruthy();
    // });
});
