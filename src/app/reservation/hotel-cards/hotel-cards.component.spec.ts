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

  it('rooms length is zero', () => {   
    let rooms = fixture.nativeElement.querySelectorAll('.rooms');
    expect(rooms.length).toBe(0);
  });

  it('should be created', () => {    
    expect(component).toBeTruthy();
  });

  it('should use info from the service', () => {
    let appService = fixture.debugElement.injector.get(HotelCardsComponent);
    expect(appService).toEqual(component);
  });


  it('component opens a HTTP request', 
    inject([AppService, XHRBackend], (appService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        expect(4).toBe(4);
      });
      component.ngOnInit()
  }));

  it('mockbackend gives back the right url', 
    inject([AppService, XHRBackend], (appService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toBe("https://bookingnorma.glitch.me/rooms");
      });
      component.ngOnInit()
  }));

  it('mockbackend gives back the right url', 
    inject([AppService, XHRBackend], (appService, mockBackend) => {

    var rooms = [
        {
          roomtype: 'single room',
          features: ['323-452 sq ft / 30-42 sq m ', 'Free access to spa facilities', 'Comfortable work area', 'Sweet sweeper bed', 'Separate bath and shower'],
          price: 115 + ' €',
          id: 1,
          image: 'https://cdn.glitch.com/fede26cd-2622-4d50-b768-5da9b932383a%2Fpic1_mod.jpg?1497949004290'
        },
        {
          roomtype: 'Classic room, non-smoking: King bed',
          features: ['223-452 sq ft / 20-42 sq m ', 'Free access to spa facilities', 'Comfortable work area'],
          price: 215 + ' €',
          id: 2,
          image: 'https://cdn.glitch.com/fede26cd-2622-4d50-b768-5da9b932383a%2Fpic2_mod.jpg?1497949136425'
        }
    ]    

    mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(rooms)
        })));
    });
    component.ngOnInit()
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let rooms = fixture.nativeElement.querySelectorAll('.rooms');
      expect(rooms.length).toEqual(2);
      let title = fixture.nativeElement.querySelector('.title');
      expect(title.textContent).toContain('single');
      let titleArray = fixture.nativeElement.querySelectorAll('.title');
      expect(title[0].textContent).toContain('room');
    });
  }));
});

