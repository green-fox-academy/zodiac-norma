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
        var links = document.querySelectorAll('.navigation');
        var activeLink = document.querySelector('.highlighted');

        if (activeLink !== null) {activeLink.className = 'navigation'}

        if (url === '/') {links[0].className = 'highlighted'}
        if (url.slice(1, 12) === 'reservation') {links[1].className = 'highlighted'}

        var dropLinks = document.querySelectorAll('.dropMenu');
        var dropActiveLink = document.querySelector('.highlightedDrop');

        if (dropActiveLink !== null) {dropActiveLink.className = 'dropMenu'}

        if (url === '/') {dropLinks[0].className = 'highlightedDrop'}
        if (url.slice(1, 12) === 'reservation') {dropLinks[1].className = 'highlightedDrop'}

    }
}
