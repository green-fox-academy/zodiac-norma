import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SliderComponent } from './home/slider/slider.component';
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

const appRoutes: Routes =[
    { path: '', component: HomeComponent },
    { path: 'reservation', component: ReservationComponent },
	{ path: 'hotel', component: HotelComponent }
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
	SimpleMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    RouterModule.forRoot(appRoutes),
	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBl_VpCrcJFmYAEiHVEYca9TWFLvYTNaaY'
    })
  ],
  exports: [ RouterModule ],
  providers: [
    TopHotelsComponent, 
    SliderComponent, 
    BookinSectionComponent, 
    AppService, 
    HotelCardsComponent
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
