import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    name:string;
    // video: any = {id: ''};
    videoId;
    roomImage = {};
    roomInfoWithImage = {};
    roomInfoWithFootage = {};
    baseUrl:string = "https://www.youtube.com/embed/";
    url;

    constructor(private appService: AppService, private sanitizer: DomSanitizer) { 
    }
    
    ngOnInit() {
        this.appService.getData('https://two-ferns.glitch.me/roomdetails')
        .subscribe(
            (response: Response) => {
                const roomData = response.json();
                this.roomImage = roomData;
                this.roomInfoWithImage = roomData[0];
                this.roomInfoWithFootage = roomData[1]
                this.videoId = this.roomInfoWithFootage[0].footage.substring(30)
                // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.videoId); 
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.roomInfoWithFootage[0].footage); 
                console.log('dadad', this.roomImage);
                console.log('image', this.roomInfoWithImage);
                console.log('vid', this.roomInfoWithFootage[0].footage);
                console.log('vid', this.videoId);
            },
            (error) => console.log(error)
        );
    }


}
