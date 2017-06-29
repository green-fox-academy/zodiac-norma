import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-top-hotels',
    templateUrl: './top-hotels.component.html',
    styleUrls: ['./top-hotels.component.scss'],
})
export class TopHotelsComponent implements OnInit {

    hotels: {};

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.appService.getData('https://two-ferns.glitch.me/toprooms')
        .subscribe(
            (response: Response) => {
                const hotelsData = response.json();
                this.hotels = hotelsData;
            },
            (error) => console.log(error)
        );
    }
}
