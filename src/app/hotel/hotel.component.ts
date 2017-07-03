import { Component, OnInit } from '@angular/core';
import { SimpleMapComponent } from './simple-map/simple-map.component';
import { OverviewComponent } from './overview/overview.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AppService } from '../app.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { HotelSubmenuComponent } from './hotel-submenu/hotel-submenu.component';

@Component({
	selector: 'app-hotel',
	templateUrl: './hotel.component.html',
	styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

	latitude;
	longitude;

	constructor(
        private request: AppService,
        private route: ActivatedRoute,
        private router: Router) {}

	ngOnInit() {

	}

}
