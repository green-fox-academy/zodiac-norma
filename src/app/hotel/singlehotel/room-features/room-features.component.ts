import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-room-features',
	templateUrl: './room-features.component.html',
	styleUrls: ['./room-features.component.scss']
})
export class RoomFeaturesComponent implements OnInit {
	inputId = 2;
	roomFeatures;
	featureList = [];

	airCo = 'Air Condition';
	bar = 'Bar';
	gym = 'Gym';
	parking = 'Parking';
	pets = "Pets allowed"
	restaurant = 'Restaurant';
	swimpool = 'Swimming Pool';
	wifi = 'Free Wifi';

	constructor(private appService: AppService, private router: Router) { }

	ngOnInit() {
	    this.appService.getData('https://two-ferns.glitch.me/api/hotels/' + this.inputId)
        .subscribe(
            (response: Response) => {
                const resp = response.json();
				console.log(resp);
                this.roomFeatures = resp.data.attributes;
				console.log(this.roomFeatures);
				this.createList()
            },
            (error) => console.log(error)
        );
		
	};
	createList() {
		if (this.roomFeatures.has_air_conditioning === true) {
			this.featureList.push(this.airCo)
		}
		if (this.roomFeatures.has_bar === true) {
			this.featureList.push(this.bar)
		}
		if (this.roomFeatures.has_parking === true) {
			this.featureList.push(this.parking)
		}
		if (this.roomFeatures.has_gym === true) {
			this.featureList.push(this.gym)
		}
		if (this.roomFeatures.has_pets === true) {
			this.featureList.push(this.pets)
		}
		if (this.roomFeatures.has_restaurant === true) {
			this.featureList.push(this.restaurant)
		}
		if (this.roomFeatures.has_swimming_pool === true) {
			this.featureList.push(this.swimpool)
		}
		if (this.roomFeatures.has_wifi === true) {
			this.featureList.push(this.wifi)
		}
		console.log(this.featureList);
		//this.renderList()
	}

	/*renderList() {
		this.featureList.forEach((el) => {

		})
	}*/
}
