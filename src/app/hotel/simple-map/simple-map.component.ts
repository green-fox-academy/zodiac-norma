import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

@Component({
	selector: 'app-simple-map',
	templateUrl: './simple-map.component.html',
	styleUrls: ['./simple-map.component.scss']
})
export class SimpleMapComponent implements OnInit {
	lat;
	long;

	constructor(private request: AppService, private mapsAPILoader: MapsAPILoader) { }

	ngOnInit() {
		this.request.getData('https://bookingnorma.glitch.me/hotel')
			.subscribe(
			(response: Response) => {
				var data = response.json();
				console.log(data);

            	this.lat= data[0].lt;
            	this.long = data[0].lng;
				
			},
			(error) => console.log(error)
			);
  	}	
}; 
