import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglehotelComponent } from './singlehotel.component';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SliderComponent } from '../../slider/slider.component';
import { HotelSubmenuComponent } from '../hotel-submenu/hotel-submenu.component';
import { RoomFeaturesComponent } from './room-features/room-features.component';
import { AppService } from '../../app.service';
import { HttpModule } from '@angular/http';

describe('SinglehotelComponent', () => {
  let component: SinglehotelComponent;
  let fixture: ComponentFixture<SinglehotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglehotelComponent, SliderComponent, HotelSubmenuComponent, RoomFeaturesComponent ],
      imports: [ RouterTestingModule, HttpModule ],
      providers: [ AppService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
