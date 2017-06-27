import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-simple-header',
    templateUrl: './simple-header.component.html',
    styleUrls: ['./simple-header.component.scss']
})
export class SimpleHeaderComponent implements OnInit {

    @ViewChild('imageHolder') imageHolder:ElementRef;

    imageProperties = [];
    title;

    constructor(
        private imageData: AppService,
        private router: Router) {}

    ngOnInit() {
        this.getRequest();
    }

    getRequest = function () {

        this.imageData.getData('https://bookingnorma.glitch.me/headerimages')
        .subscribe(
            (response: Response) => {
                var responseData = response.json();
                this.imageProperties = responseData;
                this.headerGenerator();
            },
            (error) => console.log(error)
        );
    }

    headerGenerator = function () {
        this.imageHolder.nativeElement.style.backgroundImage = 'url(' + this.imageProperties[0].backgroundImage + ')';

        this.imageHolder.nativeElement.style.backgroundPosition = this.imageProperties[0].backgroundPosition;

        this.title = this.imageProperties[0].title;
    }
}
