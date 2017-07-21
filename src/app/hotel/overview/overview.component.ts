import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
import {DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    roomImage = {};
    roomInfoWithImage = {};
    roomInfoWithFootage = {};
    url;
    urlToClick;
    thumbnail;
    id;
    subscribe;
    hotelName;

    constructor(private appService: AppService,
        private sanitizer: DomSanitizer,
        private request: AppService,
		private route: ActivatedRoute,
		private router: Router) {
            this.router.events.forEach((event) => {
    			if (event instanceof NavigationEnd) {
    				this.subscribe = this.route.queryParams.subscribe(params => {
    					this.hotelName = params['hotelName'];
    				});
    				console.log(this.hotelName);
    			}
    		})
    }


    ngOnInit() {
        this.appService.getData('https://two-ferns.glitch.me/roomdetails')
        .subscribe(
            (response: Response) => {
                const roomData = response.json();
                this.roomImage = roomData;
                this.roomInfoWithImage = roomData[0];
                this.roomInfoWithFootage = roomData[1];
                this.urlToClick = this.roomInfoWithFootage[0].footage;
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.roomInfoWithFootage[0].footage);
                this.id = this.roomInfoWithFootage[0].footage.slice(30, 41);
                this.thumbnail = 'https://img.youtube.com/vi/'+this.id+'/0.jpg'
            },
            (error) => console.log(error)
        );

    }
}
