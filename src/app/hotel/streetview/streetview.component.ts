import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper, } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-streetview',
  template: '',
})
export class StreetviewComponent implements OnInit {
	private nativeElement;

	constructor(public mapApiWrapper:GoogleMapsAPIWrapper, element : ElementRef) { 
		this.nativeElement = element.nativeElement;
		
		
	}
	ngAfterContentInit() {
		console.log(this.nativeElement.querySelector('div'));
	}

	ngOnInit() {	
		
		console.log(document.querySelector('#sv'));
		var mapFrame = document.querySelector('#sv');
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
		var panorama = new google.maps.StreetViewPanorama( mapFrame,{
        	position: position,
        	pov: {
        	heading: 34,
          	pitch: 10
        }
      })
		
	});
}

}
