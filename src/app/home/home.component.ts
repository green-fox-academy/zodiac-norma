import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { TopHotelsComponent } from './top-hotels/top-hotels.component';
import { BookinSectionComponent } from './bookin-section/bookin-section.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

}
