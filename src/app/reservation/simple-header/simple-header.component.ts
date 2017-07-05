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
    private nativeElement: Node;

    @ViewChild('imageHolder') imageHolder:ElementRef;

    text;
    image;

    constructor(
        private imageData: AppService,
        private router: Router,
        private element : ElementRef) {
            this.nativeElement = element.nativeElement;
            this.text = this.nativeElement.attributes[2].value;
            this.image = this.nativeElement.attributes[1].value;

            console.log(this.text);
            console.log(this.image);
        }

    ngOnInit() {
        this.headerGenerator();
    }

    headerGenerator = function () {
        this.imageHolder.nativeElement.style.backgroundImage = 'url(' + this.image + ')';

        // optional position parameter below:
        // this.imageHolder.nativeElement.style.backgroundPosition = 0;
    }
}
