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

  it('should use info from the service', () => {
    inject([AppService, XHRBackend], (appService, mockBackend) => {

      const mockResponse = {
        data: [
          { price: 115 + ' €', id: 1 },
          { price: 125 + ' €', id: 2 },
          { price: 135 + ' €', id: 3 },
          { price: 145 + ' €', id: 4 },
        ]
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      appService.getData().subscribe((rooms) => {
        expect(rooms.length).toBe(4);
        expect(rooms[0].price).toEqual(115);
        expect(rooms[1].price).toEqual(125);
        expect(rooms[2].price).toEqual(135);
        expect(rooms[3].price).toEqual(145);
      });
    });
  });
});
//expect(component.rooms[0].roomtype).toBe('Classic room, non-smoking: King bed');
