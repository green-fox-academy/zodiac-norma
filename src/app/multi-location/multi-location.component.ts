import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../app.service';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MapObjectComponent } from './map-object/map-object.component'
declare var google:any;

@Component({
	selector: 'app-multi-location',
	templateUrl: './multi-location.component.html',
	styleUrls: ['./multi-location.component.scss']
})

export class MultiLocationComponent implements OnInit {
	data;
	mapElement;

	constructor(public el: ElementRef, public mapApiWrapper:GoogleMapsAPIWrapper, private request: AppService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.ajax()
		this.mapElement = this.el.nativeElement.querySelector('.map');
		console.log(this.mapElement);
	}

	ajax() {
		this.request.getData('https://two-ferns.glitch.me/multi-location')
			.subscribe(
			(response: Response) => {
				this.data = response.json();
				console.log(this.data);
			},
			(error) => console.log(error)
			);
	}
}
