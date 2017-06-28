import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelComponent } from './hotel.component';
import { SimpleMapComponent } from './simple-map/simple-map.component';
import { AppService } from '../app.service';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule, MapsAPILoader} from '@agm/core';

describe('HotelComponent', () => {
  let component: HotelComponent;
  let fixture: ComponentFixture<HotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelComponent, SimpleMapComponent ],
	  imports: [HttpModule, FormsModule, RouterTestingModule, AgmCoreModule, MapsAPILoader],
	  providers: [ AppService, {provide: AgmCoreModule } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
