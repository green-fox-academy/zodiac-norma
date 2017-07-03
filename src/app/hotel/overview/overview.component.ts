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
    video: any = {id: 'A2VK5xXjiDA'};
    roomImage = {};
    roomInfoWithImage = {};
    roomInfoWithFootage = {};
    baseUrl:string = "https://www.youtube.com/embed/";
    url;

    constructor(private appService: AppService, private sanitizer: DomSanitizer) { 
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id); 
    }
    
    ngOnInit() {
        this.appService.getData('https://two-ferns.glitch.me/roomdetails')
        .subscribe(
            (response: Response) => {
                const roomData = response.json();
                this.roomImage = roomData;
                this.roomInfoWithImage = roomData[0];
                this.roomInfoWithFootage = roomData[1]
                console.log('dadad', this.roomImage);
                console.log('image', this.roomInfoWithImage);
                console.log('vid', this.roomInfoWithFootage[0].footage);
            },
            (error) => console.log(error)
        );
    }


}
