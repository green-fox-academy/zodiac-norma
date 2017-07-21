import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject, HostListener} from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MapObjectComponent } from './map-object/map-object.component';
import { DOCUMENT } from '@angular/platform-browser';

declare var google:any;

@Component({
	selector: 'app-multi-location',
	templateUrl: './multi-location.component.html',
	styleUrls: ['./multi-location.component.scss'],

})

export class MultiLocationComponent implements OnInit {
	data;
	location;
	subscribe;
	ifTopFixed = false;

	@ViewChild (MapObjectComponent)

	private mapFeatureComponent: MapObjectComponent;

	constructor(@Inject(DOCUMENT) private document: Document,
		public el: ElementRef,
		public mapApiWrapper:GoogleMapsAPIWrapper,
		private request: AppService,
		private route: ActivatedRoute,
		private router: Router,
		) {
		this.router.events.forEach((event) => {
			if (event instanceof NavigationEnd) {
				this.subscribe = this.route.queryParams.subscribe(params => {
					if (params['location'] != '') {
						this.location = params['location'];
					} else {
						this.location = 'Budapest'
					}
				});
				this.ajax();
			}
		})
	}

	ngOnInit() {}

	ajax() {
		this.request.getData('https://two-ferns.glitch.me/multi-location/' + this.location.toLowerCase())
			.subscribe(
			(response: Response) => {
				this.data = response.json();
				this.mapFeatureComponent.renderMap(this.data);
			},
			(error) => console.log(error)
			);
	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		let number = this.document.body.scrollTop;

		if (number > 490) {
			this.ifTopFixed = true;
		} else {
			this.ifTopFixed = false;
		}
	};

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
}
