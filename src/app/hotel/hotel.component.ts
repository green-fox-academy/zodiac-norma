import { Component, OnInit } from '@angular/core';
import { SimpleMapComponent } from './simple-map/simple-map.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AppService } from '../app.service';
import { Response } from '@angular/http';

@Component({
	selector: 'app-hotel',
	templateUrl: './hotel.component.html',
	styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

	latitude;
	longitude;

	constructor(private request: AppService) { }

	ngOnInit() {
		this.request.getData('https://bookingnorma.glitch.me/hotel')
			.subscribe(
			(response: Response) => {
				var data = response.json();
				console.log(data); 

            	this.latitude= data[0].lt;
            	this.longitude = data[0].lng;
				
			},
			(error) => console.log(error)
			);
	}

}