import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglehotelComponent } from './singlehotel.component';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SliderComponent } from '../../slider/slider.component';

describe('SinglehotelComponent', () => {
  let component: SinglehotelComponent;
  let fixture: ComponentFixture<SinglehotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglehotelComponent ],
      imports: [RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
