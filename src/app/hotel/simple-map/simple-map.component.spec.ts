import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMapComponent } from './simple-map.component';
import { AppService } from '../../app.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

describe('SimpleMapComponent', () => {
	let component: SimpleMapComponent;
	let fixture: ComponentFixture<SimpleMapComponent>;

	beforeEach(async(() => {
    	TestBed.configureTestingModule({
      	declarations: [ SimpleMapComponent ],
		imports: [HttpModule, FormsModule, RouterTestingModule, AgmCoreModule ],
	  	providers: [ AppService, MapsAPILoader ]
    	})
    .compileComponents();
	}));

	beforeEach(() => {
    	fixture = TestBed.createComponent(SimpleMapComponent);
    	component = fixture.componentInstance;
    	fixture.detectChanges();
	});
});
