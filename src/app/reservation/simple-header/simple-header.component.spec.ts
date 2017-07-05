import { async, ComponentFixture, TestBed,  } from '@angular/core/testing';
import { SimpleHeaderComponent } from './simple-header.component';
import { AppService } from '../../app.service';

import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SimpleHeaderComponent', () => {
    let component: SimpleHeaderComponent;
    let fixture: ComponentFixture<SimpleHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SimpleHeaderComponent ],
            imports: [
                HttpModule,
                RouterTestingModule
            ],
            providers: [
                AppService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
