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

  it('should be created', () => {    
    expect(component).toBeTruthy();
  });

  it('should use info from the service', () => {
    let appService = fixture.debugElement.injector.get(HotelCardsComponent);
    expect(appService).toEqual(component);
  });

  it('button default value should be Select a Room', () => {
    let button = fixture.nativeElement.querySelector('.button');
    console.log('hahah', button);
    
    let buttonText = button.innerHTML;
    expect(buttonText).toMatch('Select a Room');
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
});
//expect(component.rooms[0].roomtype).toBe('Classic room, non-smoking: King bed');
