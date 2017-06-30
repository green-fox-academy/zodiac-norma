import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';

import { AppService } from '../../app.service';

import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('OverviewComponent', () => {
    let component: OverviewComponent;
    let fixture: ComponentFixture<OverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OverviewComponent ],
            imports: [
                HttpModule,
                FormsModule,
                RouterTestingModule
            ],
            providers: [ AppService ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should be created', () => {
    //     expect(component).toBeTruthy();
    // });
});
