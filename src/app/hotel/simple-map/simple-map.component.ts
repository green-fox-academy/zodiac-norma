import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';

@Component({
	selector: 'app-simple-map',
	templateUrl: './simple-map.component.html',
	styleUrls: ['./simple-map.component.scss']
})
export class SimpleMapComponent implements OnInit {

	constructor(private request: AppService) { }

	ngOnInit() {
	  this.request.getData('https://bookingnorma.glitch.me/location')
			.subscribe(
			(response: Response) => {
				let data = response.json();
				console.log(data);

            	let lat = data.results[0].location.lat;
            	let long = data.results[0].location.lng;
				this.createMap(lat, long)
			},
			(error) => console.log(error)
			);
  	}
	
	/*createMap(lat, long) {
		var map = new google.maps.Map(document.getElementById('map'), {	
		zoom: 14,
		center: {lat: lat, lng: lat}
		});
		var marker = new google.maps.Marker({
		position: map.center,
		map: map
		});
	}*/
}
