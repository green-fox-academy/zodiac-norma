import { Component, OnInit, AfterContentInit, Input, Output , EventEmitter, ElementRef} from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { Response } from '@angular/http';

declare var google:any;

@Component({
	selector: 'app-map-object',
	template: '',
})

export class MapObjectComponent implements OnInit {

	@Input() data;

	constructor(public mapApiWrapper:GoogleMapsAPIWrapper, private router: Router) {}

	ngOnInit() {}

	renderMap(data) {
		this.mapApiWrapper.getNativeMap()
		.then((map)=> {
			var bounds = new google.maps.LatLngBounds();
			data.locData.forEach((location) => {
				var marker = new google.maps.Marker({
					position: {lat: location.lt, lng: location.lng},
					map: map,
					id: location.id,
				})
				var infowindow = new google.maps.InfoWindow({
          			content: '<h1 id="thelink">' + location.name + '</h1>'+
					  		'<style> h1 {color: rgb(50, 162, 227);' +
							'text-shadow: 1px 0px rgb(128, 128, 128);' +
							'padding: 4px;}</style>',
        		});
				marker.addListener('click', () => {
					infowindow.open(map, marker);
					document.querySelector('#thelink').addEventListener('click', function() {
						this.router.navigate(['/hotel/overview/'], { queryParams: {
				            hotelName: location.name,
							}
				        });
					}.bind(this));
        		})
				bounds.extend(marker.position);
			})
			map.fitBounds(bounds);
		})
	}
}
