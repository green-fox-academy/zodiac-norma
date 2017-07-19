import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleHeaderComponent } from '../reservation/simple-header/simple-header.component';
import { ContactComponent } from './contact.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { ContactService } from '../contact.service';
import { HttpModule } from '@angular/http';
import { AppService } from '../app.service';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent, SimpleHeaderComponent ],
      imports: [ HttpModule, AgmCoreModule, RouterTestingModule ],
      providers: [ ContactService, AppService, MapsAPILoader ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
