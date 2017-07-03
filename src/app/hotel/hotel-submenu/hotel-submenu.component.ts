import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hotel-submenu',
    templateUrl: './hotel-submenu.component.html',
    styleUrls: ['./hotel-submenu.component.scss']
})

export class HotelSubmenuComponent implements OnInit {

    @ViewChildren('link') link:ElementRef;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.linkHighlight(this.router.url);
        });
    }

    linkHighlight = function(url) {
        for (let i = 0; i < this.link._results.length; i++) {
            this.link._results[i].nativeElement.className = 'navigation';
        }
        this.link._results[0].nativeElement.className = 'highlighted';
        console.log('overview:   ' + url.slice(7, 15));
        console.log('rooms:   ' + url.slice(7, 12));
        console.log('map:   ' + url.slice(7, 10));
        console.log(this.link._results[0].nativeElement.className);
        if (url.slice(7, 15) === 'overview') {
            this.link._results[0].nativeElement.className = 'highlighted';
        }
        if (url.slice(7, 12) === 'rooms') {
            this.link._results[1].nativeElement.className = 'highlighted';
        }
        if (url.slice(7, 10) === 'map') {
            this.link._results[2].nativeElement.className = 'highlighted';
        }
    }
}
