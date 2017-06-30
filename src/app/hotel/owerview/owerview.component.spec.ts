import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OwerviewComponent } from './owerview.component';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('OwerviewComponent', () => {
  let component: OwerviewComponent;
  let fixture: ComponentFixture<OwerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwerviewComponent ],
      imports: [RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
