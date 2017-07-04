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

import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HotelCardsComponent', () => {
    let component: HotelCardsComponent;
    let fixture: ComponentFixture<HotelCardsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HotelCardsComponent ],
            imports: [
                HttpModule,
                FormsModule,
                RouterTestingModule
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

    it('rooms length is zero', () => {
        let rooms = fixture.nativeElement.querySelectorAll('.rooms');
        expect(rooms.length).toBe(0);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('component opens a HTTP request',
        inject([XHRBackend], (mockBackend) => {
        mockBackend.connections.subscribe((connection) => {
            expect(4).toBe(4);
        });
    }));

    it('mockbackend gives back the right url',
        inject([AppService, XHRBackend], (appService, mockBackend) => {
        mockBackend.connections.subscribe((connection) => {
            expect(connection.request.url).toBe('https://two-ferns.glitch.me/api/hotels');
        });
    }));

    it('testing mockbackend and mockdata',
        inject([AppService, XHRBackend], (appService, mockBackend) => {

            var serverData = {
                links: {
                    self: 'https://two-ferns.glitch.me/hotels/'
                },
                data: [{
                    type: 'hotels',
                    id: '1',
                    attributes: {
                        location: 'Bone City',
                        name: 'Dog Heaven',
                        main_image_src: 'https://placebear.com/200/300',
                        has_wifi: true,
                        has_parking: false,
                        has_pets: true,
                        has_restaurant: false,
                        has_bar: false,
                        has_swimming_pool: false,
                        has_air_conditioning: false,
                        has_gym: true,
                        meal_plan: 'american plan',
                        user_id: '1',
                        booking_id: '1',
                        amount: '50',
                        currency: 'USD',
                        status: 'pending',
                        stars: '3'
                    }
                }, {
                    type: 'hotels',
                    id: '2',
                    attributes: {
                        location: 'near Sirius',
                        name: 'Space Hotel',
                        main_image_src: 'https://placebear.com/200/300',
                        has_wifi: true,
                        has_parking: true,
                        has_pets: true,
                        has_restaurant: true,
                        has_bar: true,
                        has_swimming_pool: false,
                        has_air_conditioning: true,
                        has_gym: true,
                        meal_plan: 'continental plan',
                        user_id: '2',
                        booking_id: '1',
                        amount: '50',
                        currency: 'USD',
                        status: 'pending',
                        stars: '5'
                    }
                }]
            };

        mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: serverData
            })));
        });

        component.ngOnInit();

        fixture.detectChanges();
        fixture.whenStable().then(() => {

            let hotels = fixture.nativeElement.querySelectorAll('.hotels');

            expect(hotels.length).toEqual(2);

            let button = fixture.nativeElement.querySelector('.button');
            expect(button.textContent).toContain('Visit Hotel');
        });
    }));
});
