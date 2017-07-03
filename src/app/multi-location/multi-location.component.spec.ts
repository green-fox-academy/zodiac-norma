import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLocationComponent } from './multi-location.component';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MapObjectComponent } from './map-object/map-object.component';

describe('MultiLocationComponent', () => {
  let component: MultiLocationComponent;
  let fixture: ComponentFixture<MultiLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
