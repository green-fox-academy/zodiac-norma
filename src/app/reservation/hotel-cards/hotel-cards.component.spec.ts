import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HotelCardsComponent } from './hotel-cards.component';
import { AppService } from '../../app.service';
import { FormsModule } from '@angular/forms';

import {
    HttpModule,
    Http,
    BaseRequestOptions,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

describe('HotelCardsComponent', () => {
    let component: HotelCardsComponent;
    let fixture: ComponentFixture<HotelCardsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HotelCardsComponent ],
            imports: [
                HttpModule,
                FormsModule
            ],
            providers: [
                AppService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HotelCardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
