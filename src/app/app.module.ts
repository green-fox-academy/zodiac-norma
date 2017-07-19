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
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { SinglehotelComponent } from './hotel/singlehotel/singlehotel.component';
import { OverviewComponent } from './hotel/overview/overview.component';
import { HotelSubmenuComponent } from './hotel/hotel-submenu/hotel-submenu.component';
import { RoomFeaturesComponent } from './hotel/singlehotel/room-features/room-features.component';
import { MultiLocationComponent } from './reservation/multi-location/multi-location.component';
import { MapObjectComponent } from './reservation/multi-location/map-object/map-object.component';
import { ContactComponent } from './contact/contact.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { NgBoxModule } from 'ngbox/ngbox.module';
import { NgBoxService } from 'ngbox/ngbox.service';


const appRoutes: Routes =[
	{ path: '', component: HomeComponent },
	{ path: 'hotels', component: ReservationComponent },
	{ path: 'favorites', component: FavoritesComponent },
	{ path: 'about', component: ContactComponent },
	{ path: 'hotel', component: HotelComponent },
	{ path: 'hotel/overview', component: OverviewComponent },
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
		OverviewComponent,
		HotelSubmenuComponent,
		RoomFeaturesComponent,
		MultiLocationComponent,
		MapObjectComponent,
		ContactComponent,
		FavoritesComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule,
		MyDatePickerModule,
		NgBoxModule,
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
		NgBoxService,
		GoogleMapsAPIWrapper
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
