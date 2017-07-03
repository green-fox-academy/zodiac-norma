import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
// import {SafeResourceUrl, DomSanitizationService} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    name:string;
    // video: any = {id: 'a_426RiwST8'};
    roomImage = {};
    roomVideo = {};
    baseUrl:string = "https://www.youtube.com/embed/A2VK5xXjiDA";
    url;

    constructor(private appService: AppService, private sanitizer: DomSanitizer) { 
        // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.roomVideo.footage); 
    }
    
    ngOnInit() {
        this.appService.getData('https://two-ferns.glitch.me/roomdetails')
        .subscribe(
            (response: Response) => {
                const roomData = response.json();
                console.log('valami', response);
                this.roomImage = roomData[0];
                this.roomVideo = roomData[1];
                
            },
            (error) => console.log(error)
        );
  }

}
