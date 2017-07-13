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

	constructor( public mapApiWrapper:GoogleMapsAPIWrapper) { }

	ngOnInit() {
	}

	
	renderMap(x) {
		this.mapApiWrapper.getNativeMap()
		.then((map)=> {
			console.log("map object: " + map);
			console.log("data retrieved and inputted from parent component: " + this.data);	

			var bounds = new google.maps.LatLngBounds();

			x.locData.forEach((location) => {
				var marker = new google.maps.Marker({
					position: {lat: location.lt, lng: location.lng},
					map: map,
					id: location.id,	
				})
				var infowindow = new google.maps.InfoWindow({
          			content: '<h1>' + location.name +'</h1>'+'<style> h1 {color: rgb(50, 162, 227); text-shadow: 1px 0px rgb(128, 128, 128); padding: 4px;}</style>',
        		});
				marker.addListener('click', function() {
          			console.log(marker.id);  
        		})
				marker.addListener('click', function() {
          			infowindow.open(map, marker);
        		});
				
				bounds.extend(marker.position);
			})
			map.addListener('dragend', function(e) {
          		console.log('map dragged',e); 
				  console.log(this);
				  
        	});
			map.fitBounds(bounds);
		})
	}
}
