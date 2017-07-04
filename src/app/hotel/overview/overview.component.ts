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
    roomImage = {};
    roomInfoWithImage = {};
    roomInfoWithFootage = {};
    url;
    thumbnail;
    id;

    constructor(private appService: AppService, private sanitizer: DomSanitizer) { 
    }
    
    ngOnInit() {
        this.appService.getData('https://two-ferns.glitch.me/roomdetails')
        .subscribe(
            (response: Response) => {
                const roomData = response.json();
                this.roomImage = roomData;
                this.roomInfoWithImage = roomData[0];
                this.roomInfoWithFootage = roomData[1];
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.roomInfoWithFootage[0].footage); 
                console.log('url', this.url);
                this.id = this.roomInfoWithFootage[0].footage.substr(30);
                this.thumbnail = 'https://img.youtube.com/vi/'+this.id+'/0.jpg'
                console.log('thumb', this.thumbnail);
                
            },
            (error) => console.log(error)
        );
    }


}
