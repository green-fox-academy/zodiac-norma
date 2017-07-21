import { Component, OnInit, ElementRef, ViewChildren, HostListener } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    hotels = [];
    features = [];
    currentHotels = [];
    cardsPerPage = 5;
    buttonText = 'Load more Results';
    buttonClass = 'roomButton';
    defaultStorage = [];
    setClass = 'grey-star';
    leftPic = 'sideImageLeft Top';
    rightPic = 'sideImageRight Top';

    classSelector;
    location;
    checkin;
    checkout;
    adults;
    children;
    hotelPage;
    subscribe;
    sendData;
    dataToStore;
    dataToStoreString;
    toRemove;

    constructor(
        private roomData: AppService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.subscribe = this.route
        .queryParams
        .subscribe(params => {
            this.location = params['location'];
            this.checkin = params['checkin'];
            this.checkout = params['checkout'];
            this.adults = params['adults'];
            this.children = params['children'];
            this.hotelPage = params['page'];
            this.postRequest();
        });

        if (localStorage.getItem('id') == null) {
            localStorage.setItem('id', JSON.stringify(this.defaultStorage));
        }

        this.dataToStore = JSON.parse(localStorage.getItem('id'));
        this.dataToStoreString = localStorage.getItem('id');
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset > 340) {
            this.leftPic = 'sideImageLeft Scroll';
            this.rightPic = 'sideImageRight Scroll';
        }
        else {
            this.leftPic = 'sideImageLeft Top';
            this.rightPic = 'sideImageRight Top';
        }
        if ((window.pageYOffset + window.innerHeight)>=document.body.scrollHeight) {
            this.leftPic = 'sideImageLeft Bottom';
            this.rightPic = 'sideImageRight Bottom';
        }
    }

    markFavorite = function(event) {

        this.dataToStore = JSON.parse(localStorage.getItem('id'));
        this.dataToStoreString = localStorage.getItem('id');

        if (event.target.className === 'grey-star') {
            event.target.className = 'yellow-star';
            this.dataToStore.push(JSON.parse(event.target.innerHTML));
            localStorage.setItem('id', JSON.stringify(this.dataToStore));
            this.dataToStoreString = localStorage.getItem('id');
        } else {
            event.target.className = 'grey-star';
            let searchIndex = JSON.parse(event.target.innerHTML);
            this.toRemove = this.dataToStore.indexOf(searchIndex);
            this.dataToStore.splice(this.toRemove, 1);
            localStorage.setItem('id', JSON.stringify(this.dataToStore));
            this.dataToStoreString = localStorage.getItem('id');
        }

        this.pageRefresh();
    }

    postRequest = function () {
        this.sendData = [{
            'location': this.location,
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

    pageRefresh = function() {
        this.router.navigate(['/favorites']);
    }

    buttonQuery = function() {

        this.buttonText = 'No more Results';
        this.buttonClass = 'noButton';

        // this code is needed for real backend!
        // if (Math.ceil(this.hotels.length / this.cardsPerPage) == this.hotelPage) {
        //     this.buttonText = 'No more Results';
        //     this.buttonClass = 'noButton';
        // }

        this.router.navigate(['/favorites'],
        { queryParams: {
            location: this.location,
            checkin: this.checkin,
            checkout: this.checkout,
            adults: this.adults,
            children: this.children,
            page: this.hotelPage
            }
        });
    }
}
