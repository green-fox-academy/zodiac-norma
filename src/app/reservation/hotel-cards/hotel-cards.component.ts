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

    hotels = [];
    features = [];
    currentHotels = [];
    cardsPerPage = 5;
    buttonText = 'Load more Results';
    buttonClass = 'roomButton';

    classSelector;
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

            this.roomData.postData(this.sendData, 'https://two-ferns.glitch.me/api/hotels2')
            .subscribe(
                (response: Response) => {
                    const cardData = response.json();
                    this.hotels = cardData;
                    this.buttonQuery();
                    this.featureBuilder();
                },
                (error) => console.log(error)
            );
        }

        featureBuilder = function() {
            this.features = [];
            let onesFeatures = [];
            for (let i = 0; i < this.hotels.data.length; i++) {
                onesFeatures = [];
                if (this.hotels.data[i].attributes.has_air_conditioning === true) {
                    onesFeatures.push('air conditioning');
                }
                if (this.hotels.data[i].attributes.has_bar === true) {
                    onesFeatures.push('bar');
                }
                if (this.hotels.data[i].attributes.has_gym === true) {
                    onesFeatures.push('gym');
                }
                if (this.hotels.data[i].attributes.has_parking === true) {
                    onesFeatures.push('parking');
                }
                if (this.hotels.data[i].attributes.has_pets === true) {
                    onesFeatures.push('pets allowed');
                }
                if (this.hotels.data[i].attributes.has_restaurant === true) {
                    onesFeatures.push('restaurant');
                }
                if (this.hotels.data[i].attributes.has_swimming_pool === true) {
                    onesFeatures.push('swimming_pool');
                }
                if (this.hotels.data[i].attributes.has_wifi === true) {
                    onesFeatures.push('free wifi');
                }
                this.hotels.data[i].features = onesFeatures;
                this.currentHotels.push(this.hotels.data[i]);

                this.features.push(onesFeatures);
            }
        }

        buttonQuery = function() {

            this.buttonText = 'No more Results';
            this.buttonClass = 'noButton';

            // this code is needed for real backend!
            // if (Math.ceil(this.hotels.length / this.cardsPerPage) == this.hotelPage) {
            //     this.buttonText = 'No more Results';
            //     this.buttonClass = 'noButton';
            // }

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
        if (Math.ceil(this.hotels.length / this.cardsPerPage) > this.hotelPage) {
            this.classSelector = document.querySelectorAll('.hotels');
            this.classSelector.forEach(function(element) {
                element.innerHTML = '';
                element.className = "hiddenClass";
            });
            this.hotelPage++;
            this.postRequest();
        }
    }
}
