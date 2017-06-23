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
    cardsPerPage = 5;
    buttonText = 'Load more Results';

    typeofroom;
    checkin;
    checkout;
    adults;
    children;
    hotelPage;
    subscribe;
    sendData;

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
                this.hotelPage = params['page'];
        });

        this.postRequest();
      }

      postRequest = function () {
          this.sendData = [{
              'typeofroom': this.typeofroom,
              'checkin': this.checkin,
              'checkout': this.checkout,
              'adults': this.adults,
              'children': this.children,
              'page': this.hotelPage,
              'cardsPerPage': this.cardsPerPage
          }]

          this.roomData.postData(this.sendData, 'https://bookingnorma.glitch.me/rooms')
          .subscribe(
              (response: Response) => {
                  const cardData = response.json();
                  this.rooms = cardData;
                  this.roomFill();
              },
              (error) => console.log(error)
            );
      }

    roomFill = function() {
        let i = 1;
        for (i; i < this.rooms.length; i++) {
          this.currentRooms.push(this.rooms[i]);
        }
        if (Math.ceil(this.rooms[0] / this.cardsPerPage) == this.hotelPage) {
            this.buttonText = 'No more Results';
        }

        this.router.navigate(['/reservation'],
        { queryParams: {
            typeofroom: this.typeofroom,
            checkin: this.checkin,
            checkout: this.checkout,
            adults: this.adults,
            children: this.children,
            page: this.hotelPage
          }
        });
    }

    loadMoreRooms = function() {
        if (Math.ceil(this.rooms[0] / this.cardsPerPage) > this.hotelPage) {
            this.hotelPage++;
            this.postRequest();
        }
    }
}
