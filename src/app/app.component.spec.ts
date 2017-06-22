import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { TopHotelsComponent } from './home/top-hotels/top-hotels.component';
import { BookinSectionComponent } from './home/bookin-section/bookin-section.component';

import { ReservationComponent } from './reservation/reservation.component';
import { CheckFormComponent } from './reservation/check-form/check-form.component';
import { HotelCardsComponent } from './reservation/hotel-cards/hotel-cards.component';
import { SimpleHeaderComponent } from './reservation/simple-header/simple-header.component';

import { AppService } from './app.service';

import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent, 
        SliderComponent, 
        TopHotelsComponent, 
        BookinSectionComponent,
        ReservationComponent,
        CheckFormComponent,
        HotelCardsComponent,
        SimpleHeaderComponent
      ],

      imports: [
        HttpModule, 
        MyDatePickerModule, 
        FormsModule,
        RouterTestingModule
      ],

      providers: [
        AppService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
