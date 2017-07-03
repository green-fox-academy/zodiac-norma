import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var google: any;

@Component({
	selector: 'app-simple-map',
	templateUrl: './simple-map.component.html',
	styleUrls: ['./simple-map.component.scss']
})
export class SimpleMapComponent implements OnInit {
	lat;
	long;
	adress;
	private nativeElement;
	mapBox;

	constructor( private request: AppService, private route: ActivatedRoute, private router: Router, public mapApiWrapper:GoogleMapsAPIWrapper, public element : ElementRef) { 
		 //this.nativeElement = elementRef.nativeElement;
	}

	ngOnInit() {
		this.ajax()
		this.mapBox = this.element.nativeElement.querySelector('.map');
		console.log(this.mapBox);
		
  	}

	ajax() {
		this.request.getData('https://two-ferns.glitch.me/hotel')
			.subscribe(
			(response: Response) => {
				var data = response.json();
				console.log(data);
            	this.lat= data[0].lt;
            	this.long = data[0].lng;
				this.adress = data[0].adr;
			},
			(error) => console.log(error)
			);
	}

	streetview() {
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
    	})
	}

	public customStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-23"
            },
            {
                "lightness": "27"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": "1"
            },
            {
                "hue": "#ff1800"
            },
            {
                "weight": "0.75"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e74c3c"
            },
            {
                "saturation": "-59"
            },
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff1800"
            },
            {
                "saturation": "2"
            },
            {
                "lightness": "2"
            },
            {
                "weight": "0.75"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-51"
            },
            {
                "color": "#cbcbcb"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#2c3e50"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

	
}; 
