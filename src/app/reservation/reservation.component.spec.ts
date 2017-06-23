import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationComponent } from './reservation.component';
import { CheckFormComponent } from './check-form/check-form.component';
import { HotelCardsComponent } from './hotel-cards/hotel-cards.component';
import { SimpleHeaderComponent } from './simple-header/simple-header.component';
import { AppService } from '../app.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReservationComponent,
        CheckFormComponent,
        HotelCardsComponent,
        SimpleHeaderComponent
      ],

      imports: [
        HttpModule,
        MyDatePickerModule,
        FormsModule
      ],

      providers: [
        AppService,
        HotelCardsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
