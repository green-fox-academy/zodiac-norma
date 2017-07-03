import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../app.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-multi-location',
	templateUrl: './multi-location.component.html',
	styleUrls: ['./multi-location.component.scss']
})
export class MultiLocationComponent implements OnInit {

	constructor(private request: AppService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.ajax();
	}
	ajax() {
		this.request.getData('https://two-ferns.glitch.me/multi-location')
			.subscribe(
			(response: Response) => {
				var data = response.json();
			},
			(error) => console.log(error)
			);
	}	
}
