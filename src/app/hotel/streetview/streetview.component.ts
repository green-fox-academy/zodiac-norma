import { Component, OnInit, Input } from '@angular/core';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper, } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-streetview',
  template: '',
})
export class StreetviewComponent implements OnInit {
		
	constructor(public mapApiWrapper:GoogleMapsAPIWrapper,) { 

	}

	ngOnInit() {	
		this.mapApiWrapper.getNativeMap()
		.then((map)=> {
		console.log(map);
		console.log(map.getZoom());

		let position = new google.maps.LatLng(45.521, -122.677);
		
		var cityCircle = new google.maps.Circle({
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.35,
			map: map,
			center: position,
			radius: 10000
		});
		
	});
}

}
