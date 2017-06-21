import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { TopHotelsComponent } from './top-hotels/top-hotels.component';
import { BookinSectionComponent } from './bookin-section/bookin-section.component';

import { AppService } from '../app.service';

import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent, 
        SliderComponent, 
        TopHotelsComponent, 
        BookinSectionComponent
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
