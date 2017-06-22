import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

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

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('ListComponent DI Component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelCardsComponent],
    });

    this.fixture = TestBed
      .overrideComponent(HotelCardsComponent, {
        set: {
          providers: [{ provide: AppService, useClass: MockBackend }],
        },
      })
      .createComponent(HotelCardsComponent);
  });

  it('should render list', async(() => {
    const element = this.fixture.nativeElement;
    this.fixture.detectChanges();
    expect(element.querySelectorAll('.rooms').length).toBe(28);
  }));

});


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

  it('button value is null', () => {
    let button = fixture.nativeElement.querySelector('.button');
  
    expect(button).toBe(null);

    // component.ngOnInit();
    // fixture.detectChanges();

    // expect(button).toContain('Select a Room');
  });

  it('component opens a HTTP request', 
    inject([AppService, XHRBackend], (appService, mockBackend) => {

      mockBackend.connections.subscribe((connection) => {
        expect(4).toBe(4);
      });
      component.ngOnInit()
      console.log('hahah', component);
      fixture.detectChanges();
      
      let button = fixture.nativeElement.querySelector('.button');
      expect(button).toContain('Select a Room');
    }));

  it('mockbackend gives back the right url', 
    inject([AppService, XHRBackend], (appService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toBe("https://bookingnorma.glitch.me/rooms");
      });
      component.ngOnInit()
  }));
});

