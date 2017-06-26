import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    classSelector
    constructor() { }

    ngOnInit() {
        // linkHighlight = function(activeLink) {
        //     this.classSelector = document.querySelectorAll('.navigation');
        //     this.classSelector.forEach(function(element) {
        //         element.className = "hiddenClass";
        //     });
        //     this.classSelector[4].className = ".navigation end";
        //
        //     this.classSelector = document.querySelectorAll('.dropMenu');
        //     this.classSelector.forEach(function(element) {
        //         element.className = "hiddenClass";
        //     });
        // }
    }

}
