import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-streetview',
  templateUrl: './streetview.component.html',
  styleUrls: ['./streetview.component.scss']
})

export class StreetviewComponent implements OnInit {
	mapBox;
	@Input() lat;
	@Input() long;

	constructor(public mapApiWrapper:GoogleMapsAPIWrapper, public element : ElementRef) { }

	ngOnInit() {
		this.mapBox = this.element.nativeElement.querySelector('.sv-box');
		console.log(this.mapBox);
		this.streetview()
	}

	streetview() {
        this.mapApiWrapper.getNativeMap()
        .then((map)=> {
	        console.log(map);
			console.log(this.lat);
			console.log(this.mapBox);
			
	        let position = new google.maps.LatLng(this.lat, this.long);
			
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

	        var panorama = new google.maps.StreetViewPanorama( this.mapBox, {
			    position: position,
			    pov: {
			    heading: 34,
			  	pitch: 10
				}
			})
			//map.setStreetView(panorama);
    	})
	}
}
