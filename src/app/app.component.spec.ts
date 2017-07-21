import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { TopHotelsComponent } from './home/top-hotels/top-hotels.component';
import { BookinSectionComponent } from './home/bookin-section/bookin-section.component';

import { ReservationComponent } from './reservation/reservation.component';
import { CheckFormComponent } from './reservation/check-form/check-form.component';
import { HotelCardsComponent } from './reservation/hotel-cards/hotel-cards.component';
import { SimpleHeaderComponent } from './reservation/simple-header/simple-header.component';

import { AppService } from './app.service';

import { Routes, RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Location } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { HotelComponent } from './hotel/hotel.component';
import { SimpleMapComponent } from './hotel/simple-map/simple-map.component';
import { OverviewComponent } from './hotel/overview/overview.component';
import { SinglehotelComponent } from './hotel/singlehotel/singlehotel.component';
import { MultiLocationComponent} from './reservation/multi-location/multi-location.component';
import { MapObjectComponent} from './reservation/multi-location/map-object/map-object.component'

describe('AppComponent', () => {
    let locations, routing;
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                FooterComponent,
                HomeComponent,
                SliderComponent,
                TopHotelsComponent,
                BookinSectionComponent,
                ReservationComponent,
                CheckFormComponent,
                HotelCardsComponent,
                SimpleHeaderComponent,
                SimpleMapComponent,
                OverviewComponent,
                SinglehotelComponent,
                HotelComponent,
                MultiLocationComponent,
				MapObjectComponent
            ],
            imports: [
                HttpModule,
                MyDatePickerModule,
                FormsModule,

				/*AgmCoreModule.forRoot({
      				apiKey: 'AIzaSyBl_VpCrcJFmYAEiHVEYca9TWFLvYTNaaY'
    			}),*/
                RouterTestingModule.withRoutes([
                    { path: '', component: HomeComponent },
                    { path: 'reservation', component: ReservationComponent },
                    { path: 'hotel', component: HotelComponent },
                    { path: 'hotel/overview', component: OverviewComponent },
                    { path: 'hotel/rooms', component: SinglehotelComponent },
                    { path: 'hotel/map', component: SimpleMapComponent }
                ])
            ],
            providers: [ AppService ]
        }).compileComponents();
    }));

    beforeEach(inject([Router, Location], (router: Router, location: Location) => {
        locations = location;
        routing = router;
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('Load the reservation page', async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     routing.navigate(['reservation']).then(() => {
    //         expect(locations.path()).toBe('/reservation');
    //     });
    // }));

    // it('Load the home page', async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     routing.navigate(['']).then(() => {
    //         expect(locations.path()).toBe('/');
    //     });
    // }));

    // it('should be created', () => {
    //     expect(component).toBeTruthy();
    // });

    // it('should be created', () => {
    //     expect(component).toBeTruthy();
    // });
});
