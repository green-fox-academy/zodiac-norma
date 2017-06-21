import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCardsComponent } from './hotel-cards.component';

import { AppService } from '../../app.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
      providers: [ AppService ]
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
});
