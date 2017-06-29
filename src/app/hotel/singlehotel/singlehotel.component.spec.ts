import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglehotelComponent } from './singlehotel.component';

describe('SinglehotelComponent', () => {
  let component: SinglehotelComponent;
  let fixture: ComponentFixture<SinglehotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglehotelComponent ]
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
