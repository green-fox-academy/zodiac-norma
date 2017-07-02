import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    @ViewChildren('link') link:ElementRef;
    @ViewChildren('dropLink') dropLink:ElementRef;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.linkHighlight(this.router.url);
        });
    }

    linkHighlight = function(url) {
        for (let i = 0; i < this.link._results.length; i++) {
            this.link._results[i].nativeElement.className = 'navigation';
            this.dropLink._results[i].nativeElement.className = 'dropMenu';
        }

        this.link._results[4].nativeElement.className = 'navigation end';

        if (url === '/') {
            this.link._results[0].nativeElement.className = 'highlighted';
            this.dropLink._results[0].nativeElement.className = 'highlightedDrop';
        }
        if (url.slice(1, 12) === 'reservation') {
            this.link._results[2].nativeElement.className = 'highlighted';
            this.dropLink._results[2].nativeElement.className = 'highlightedDrop';
        }
        if (url.slice(1, 6) === 'hotel') {
            this.link._results[1].nativeElement.className = 'highlighted';
            this.dropLink._results[1].nativeElement.className = 'highlightedDrop';
        }
    }
}
