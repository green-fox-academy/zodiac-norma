import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-hotel-cards',
  templateUrl: './hotel-cards.component.html',
  styleUrls: ['./hotel-cards.component.scss']
})
export class HotelCardsComponent implements OnInit {

  rooms = [];
  // roomtype: string

  constructor(private roomData: AppService) { }

  ngOnInit() {
     this.roomData.getData('https://bookingnorma.glitch.me/rooms')
    .subscribe(
        (response: Response) => {
          const cardData = response.json();
          this.rooms = cardData;
        },
        (error) => console.log(error)  
      );
      // this.roomtype = this.rooms[0].roomtype
  }
  
}


