import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHotelsComponent } from './top-hotels.component';

describe('TopHotelsComponent', () => {
  let component: TopHotelsComponent;
  let fixture: ComponentFixture<TopHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
