import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../../../app.service';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { RoomFeaturesComponent } from './room-features.component';

describe('RoomFeaturesComponent', () => {
  let component: RoomFeaturesComponent;
  let fixture: ComponentFixture<RoomFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomFeaturesComponent ],
	  imports: [HttpModule, RouterTestingModule ],
	  providers: [AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
