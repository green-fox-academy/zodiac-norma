import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SliderComponent } from './slider/slider.component';
import { BookinSectionComponent } from './home/bookin-section/bookin-section.component';
import { TopHotelsComponent } from './home/top-hotels/top-hotels.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CheckFormComponent } from './reservation/check-form/check-form.component';
import { SimpleHeaderComponent } from './reservation/simple-header/simple-header.component';
import { HotelCardsComponent } from './reservation/hotel-cards/hotel-cards.component';
import { HotelComponent } from './hotel/hotel.component';
import { SimpleMapComponent } from './hotel/simple-map/simple-map.component';
import { AgmCoreModule } from '@agm/core';
import { SinglehotelComponent } from './hotel/singlehotel/singlehotel.component';
import { OwerviewComponent } from './hotel/owerview/owerview.component';



const appRoutes: Routes =[
    { path: '', component: HomeComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'hotel', component: HotelComponent },
    { path: 'hotel/overview', component: OwerviewComponent },
    { path: 'hotel/rooms', component: SinglehotelComponent },
    { path: 'hotel/map', component: SimpleMapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BookinSectionComponent,
    TopHotelsComponent,
    HeaderComponent,
    HomeComponent,
    ReservationComponent,
    FooterComponent,
    CheckFormComponent,
    SimpleHeaderComponent,
    HotelCardsComponent,
	HotelComponent,
	SimpleMapComponent,
	SinglehotelComponent,
	OwerviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    RouterModule.forRoot(appRoutes),
	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBl_VpCrcJFmYAEiHVEYca9TWFLvYTNaaY',
    }),
  ],
  exports: [ RouterModule ],
  providers: [
    TopHotelsComponent,
    SliderComponent,
    BookinSectionComponent,
    AppService,
    HotelCardsComponent,
  ],

    bootstrap: [AppComponent]
})
export class AppModule { }
