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
	ifBottomFixed = false;
	
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
				this.subscribe = this.route
					.queryParams
					.subscribe(params => {
						this.location = params['location'];		
					});
					console.log(this.location);
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
				console.log(this);
				this.mapFeatureComponent.renderMap(this.data);
			},
			(error) => console.log(error)
			);	
	}	

	@HostListener("window:scroll", [])
	onWindowScroll() {
		let number = this.document.body.scrollTop;
		console.log(number);

		if (number > 490) {
			this.ifTopFixed = true;
		} else {
			this.ifTopFixed = false;
		}
	}
}
