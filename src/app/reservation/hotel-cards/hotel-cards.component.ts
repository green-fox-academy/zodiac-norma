import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-cards',
  templateUrl: './hotel-cards.component.html',
  styleUrls: ['./hotel-cards.component.scss']
})

export class HotelCardsComponent implements OnInit {

    rooms = [];
    currentRooms = [];
    hotelPage = 1;

    typeofroom;
    checkin;
    checkout;
    adults;
    children;
    subscribe;

  constructor(
      private roomData: AppService,
      private route: ActivatedRoute,
      private router: Router) {}

  ngOnInit() {
    this.subscribe = this.route
        .queryParams
        .subscribe(params => {
            this.typeofroom = params['typeofroom'];
            this.checkin = params['checkin'];
            this.checkout = params['checkout'];
            this.adults = params['adults'];
            this.children = params['children'];
    });

    let sendData = {
        'typeofroom': this.typeofroom,
        'checkin': this.checkin,
        'checkout': this.checkout,
        'adults': this.adults,
        'children': this.children
    }
    console.log(sendData);

    this.roomData.getData('https://bookingnorma.glitch.me/rooms')
    .subscribe(
        (response: Response) => {
          const cardData = response.json();
          this.rooms = cardData;
          this.firstRoomFill();
          console.log(cardData);
        },
        (error) => console.log(error)
      );
  }

  firstRoomFill = function() {
    let i = 0;
    let end;
    this.rooms.length >= 10 ? end = 10 : end = this.rooms.length;
    for (i; i < end; i++) {
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
