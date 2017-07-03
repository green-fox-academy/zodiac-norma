import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { SliderComponent } from '../../slider/slider.component';
import { HotelSubmenuComponent } from '../hotel-submenu/hotel-submenu.component';

@Component({
    selector: 'app-singlehotel',
    templateUrl: './singlehotel.component.html',
    styleUrls: ['./singlehotel.component.scss']
})
export class SinglehotelComponent implements OnInit {

    cardData;
    rooms;

    constructor(
        private roomData: AppService,
        private router: Router) {}

    ngOnInit() {
        this.getRequest();
    }

    getRequest = function () {

      this.roomData.getData('https://two-ferns.glitch.me/toprooms')
      .subscribe(
          (response: Response) => {
              const cardData = response.json();
              this.rooms = cardData;
              console.log(this.rooms);
          },
          (error) => console.log(error)
      );
    }
}
