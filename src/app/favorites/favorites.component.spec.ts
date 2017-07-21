import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleHeaderComponent } from '../reservation/simple-header/simple-header.component';
import { Router } from '@angular/router';
import { FavoritesComponent } from './favorites.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppService } from '../app.service';

import {
    HttpModule,
    Http,
    BaseRequestOptions,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ HttpModule, RouterTestingModule ],
        declarations: [ FavoritesComponent, SimpleHeaderComponent ],
        providers: [ AppService ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
