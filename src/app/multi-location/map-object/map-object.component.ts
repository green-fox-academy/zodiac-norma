import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Response } from '@angular/http';

declare var google:any;

@Component({
  selector: 'app-map-object',
  template: '',
  //templateUrl: './map-object.component.html',
  //styleUrls: ['./map-object.component.scss']
})
export class MapObjectComponent implements OnInit {
	//@Input() data;
	data;
	centre;
	
	constructor(public mapApiWrapper:GoogleMapsAPIWrapper, private request: AppService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.ajax()
	}
	ajax() {
		this.request.getData('https://two-ferns.glitch.me/multi-location')
			.subscribe(
			(response: Response) => {
				this.data = response.json();
				console.log(this.data);
				
				this.centre = { lat: this.data[0].lt, long: this.data[0].lng };
				console.log(this.centre);
				this.mapObject()
			},
			(error) => console.log(error)
			);
	}
	mapObject() {
		
		this.mapApiWrapper.getNativeMap()
			.then((map)=> {
				console.log(map);
				console.log(this.data);
				var latLng = {lat: this.data[0].lt, lng: this.data[0].lng};

				let position = new google.maps.LatLng(this.data[0].lt, this.data[0].lng);

    			this.data.forEach((location) => {
					var marker = new google.maps.Marker({
					position: {lat: location.lt, lng: location.lng},
					map: map,
					
					});
				})		
		})
	}
}
