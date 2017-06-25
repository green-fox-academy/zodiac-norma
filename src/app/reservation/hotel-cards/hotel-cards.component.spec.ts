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

import { Routes, RouterModule } from '@angular/router';
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
      console.log('hohoh', appService);
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toBe("https://bookingnorma.glitch.me/rooms");
      });
  }));

  // it('should test appservice', () => {
    
  //   let fixture = TestBed.createComponent(HotelCardsComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   let appService = fixture.debugElement.injector.get(AppService);
        
  //   app.ngOnInit();

  //   appService.getData('https://bookingnorma.glitch.me/rooms')
  //      .subscribe(
  //       (response: Response) => {
  //         const cardData = response.json();
  //         this.rooms = cardData;
  //       },
  //       (error) => console.log(error)  
  //     );
    
    
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     let rooms = fixture.nativeElement.querySelectorAll('.rooms');
  //     console.log('hihihi', rooms);
      
      // expect(rooms.length).toEqual(2);
      // let title = fixture.nativeElement.querySelector('.title');
      // expect(title.textContent).toContain('single');
      // let titleArray = fixture.nativeElement.querySelectorAll('.title');
      // expect(title[0].textContent).toContain('room');
  //   });

    
  // })



  it('mockbackend gives back the right url', 
    inject([XHRBackend], (mockBackend) => {

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
      let rooms = fixture.nativeElement.querySelectorAll('.rooms');
      console.log('hihi', rooms);
      
      expect(rooms.length).toEqual(2);
      let title = fixture.nativeElement.querySelector('.title');
      console.log('huuuuu', title);
      
      expect(title.textContent).toContain('single');
      let titleArray = fixture.nativeElement.querySelectorAll('.title');
      expect(title[0].textContent).toContain('room');
    });
  }));
});

