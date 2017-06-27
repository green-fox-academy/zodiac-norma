import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.linkHighlight(this.router.url);
        });
    }

    linkHighlight = function(url) {
        var links = document.getElementsByClassName('navigation');
        var activeLink = document.getElementsByClassName('highlighted');

        if (activeLink.length !== 0) {activeLink[0].className = 'navigation'}

        if (url === '/') {links[0].className = 'highlighted'}
        if (url.slice(1, 12) === 'reservation') {links[2].className = 'highlighted'}

        var dropLinks = document.getElementsByClassName('dropMenu');
        var dropActiveLink = document.getElementsByClassName('highlightedDrop');

        if (dropActiveLink.length !== 0) {dropActiveLink[0].className = 'dropMenu'}

        if (url === '/') {dropLinks[0].className = 'highlightedDrop'}
        if (url.slice(1, 12) === 'reservation') {dropLinks[2].className = 'highlightedDrop'}

    }
}
