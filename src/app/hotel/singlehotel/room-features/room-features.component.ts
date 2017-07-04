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
	rawData;
	features = ['Air Condition','Bar', 'Gym', 'Parking', 'Pets allowed', 'Restaurant', 'Swimming Pool', 'Free Wifi' ];
	
	listAll = [];
	ifFeatureExist = [];
	result = {};
	toDisplay = [];
	
	constructor(private appService: AppService, private router: Router) { }

	ngOnInit() {
	    this.appService.getData('https://two-ferns.glitch.me/api/hotels/' + this.inputId)
        .subscribe(
            (response: Response) => {
                const resp = response.json();
				console.log(resp);
                this.rawData = resp.data.attributes;
				this.createObject();
            },
            (error) => console.log(error)
        );	
	};

	createObject() {
		for (let prop in this.rawData) {
			this.listAll.push(this.rawData[prop]);
			this.ifFeatureExist = this.listAll.slice(3, 11);
		}
		this.features.forEach((feature, value) => this.result[feature] = this.ifFeatureExist[value]);	
		this.selectFeature();
	};

	selectFeature() {
		for (let prop in this.result) {
			if (this.result[prop] === true) {	
				this.toDisplay.push(prop)
			}
		}
	}
}
