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
  currentRooms = [];
  hotelPage = 1;

  constructor(private roomData: AppService) { }

  ngOnInit() {
     this.roomData.getData('https://bookingnorma.glitch.me/rooms')
    .subscribe(
        (response: Response) => {
          const cardData = response.json();
          this.rooms = cardData;
          this.firstRoomFill();
        },
        (error) => console.log(error)
      );
  }
  firstRoomFill = function() {
    for (let i = 0; i < 10; i++) {
      this.currentRooms.push(this.rooms[i]);
    }
  }

  loadMoreRooms = function() {
    let i = this.hotelPage * 10;
    let end;
    (this.rooms.length - this.hotelPage * 10) >= 10 ? end = this.hotelPage * 10 + 10 : end = this.rooms.length;
    for (i; i < end; i++) {
      this.currentRooms.push(this.rooms[i]);
    }
    this.hotelPage++;
  }
}
