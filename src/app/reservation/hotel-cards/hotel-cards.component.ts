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
    cardsPerPage = 10;
    buttonText = 'Load more Results';

    typeofroom;
    checkin;
    checkout;
    adults;
    children;
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
        });

        this.sendData = [{
            'typeofroom': this.typeofroom || 0,
            'checkin': this.checkin || 0,
            'checkout': this.checkout || 0,
            'adults': this.adults || 0,
            'children': this.children || 0
        }]

        this.roomData.postData(this.sendData, 'https://bookingnorma.glitch.me/rooms')
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
        let i = 0;
        let end;
        this.rooms.length >= this.cardsPerPage ? end = this.cardsPerPage : end = this.rooms.length;
        for (i; i < end; i++) {
          this.currentRooms.push(this.rooms[i]);
        }
    }

    loadMoreRooms = function() {
        let i = this.hotelPage * this.cardsPerPage;
        let end;
        (this.rooms.length - this.hotelPage * this.cardsPerPage) >= this.cardsPerPage ? end = this.hotelPage * this.cardsPerPage + this.cardsPerPage : end = this.rooms.length;
        for (i; i < end; i++) {
            this.currentRooms.push(this.rooms[i]);
        }
        if (end === this.rooms.length) {
            this.buttonText = 'No more Results';
        }
        this.hotelPage++;
    }
}
