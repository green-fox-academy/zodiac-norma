import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MapObjectComponent } from './map-object/map-object.component';

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

	@ViewChild (MapObjectComponent)
	private mapFeatureComponent: MapObjectComponent;

	constructor(public el: ElementRef, 
		public mapApiWrapper:GoogleMapsAPIWrapper, 
		private request: AppService,
		private route: ActivatedRoute,
		private router: Router) { 	
			this.router.events.forEach((event) => {
			if(event instanceof NavigationEnd) {
				this.subscribe = this.route
					.queryParams
					.subscribe(params => {
						this.location = params['location'];		
					});
					console.log(this.location);
					this.ajax();
			}
		});
		}

	ngOnInit() {

	}

	ajax() {
		this.request.getData('https://two-ferns.glitch.me/multi-location/' + this.location)
			.subscribe(
			(response: Response) => {
				this.data = response.json();
				console.log(this);
				this.mapFeatureComponent.renderMap(this.data);
			},
			(error) => console.log(error)
			);	
		
	}	
}
