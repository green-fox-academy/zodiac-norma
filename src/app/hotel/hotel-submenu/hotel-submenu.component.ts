import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hotel-submenu',
    templateUrl: './hotel-submenu.component.html',
    styleUrls: ['./hotel-submenu.component.scss']
})

export class HotelSubmenuComponent implements OnInit {

    @ViewChildren('linken') linken:ElementRef;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.linkenHighlight(this.router.url);
        });
    }

    linkenHighlight = function(url) {
        for (let i = 0; i < this.linken._results.length; i++) {
            this.linken._results[i].nativeElement.className = 'navigation';
        }
        if (url.slice(7, 15) === 'overview') {
            this.linken._results[0].nativeElement.className = 'highlighted';
        }
        if (url.slice(7, 12) === 'rooms') {
            this.linken._results[1].nativeElement.className = 'highlighted';
        }
        if (url.slice(7, 10) === 'map') {
            this.linken._results[2].nativeElement.className = 'highlighted';
        }
        console.log(this.linken._results[2]);
    }
}
