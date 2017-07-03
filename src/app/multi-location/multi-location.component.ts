import { Component, OnInit, ViewChild} from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../app.service';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MapObjectComponent } from './map-object/map-object.component'

@Component({
	selector: 'app-multi-location',
	templateUrl: './multi-location.component.html',
	styleUrls: ['./multi-location.component.scss']
})

export class MultiLocationComponent implements OnInit {
	data;
	centre;
	
	constructor(public mapApiWrapper:GoogleMapsAPIWrapper, private request: AppService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.ajax()
	}
	
	ajax() {
		this.request.getData('https://two-ferns.glitch.me/multi-location')
			.subscribe(
			(response: Response) => {
				this.data = response.json();
				console.log(this.data);
				
				this.centre = { lat: this.data[0].lt, long: this.data[0].lng };
				console.log(this.centre);

			},
			(error) => console.log(error)
			);
	}


}
