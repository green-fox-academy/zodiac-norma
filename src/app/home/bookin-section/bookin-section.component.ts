import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bookin-section',
    templateUrl: './bookin-section.component.html',
    styleUrls: ['./bookin-section.component.scss']
})

export class BookinSectionComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    isValid(location, checkin, checkout, adults, children) {
        if (checkin.mydate === undefined) {
            checkin.mydate = {
                formatted: ""
            }
        }
        if (checkout.mydate === undefined) {
            checkout.mydate = {
                formatted: ""
            }
        }
        if (adults == '' || adults < 1) {
            console.log('Characters in the adults field are not all numbers')
        }
        if (children == '' || children < 0) {
            console.log('Characters in the children field are not all numbers')
        }

        this.goToPage(location, checkin, checkout, adults, children);
    }

    goToPage(location, checkin, checkout, adults, children) {
        this.router.navigate(['/reservation'],
        { queryParams: {
            location: location,
            checkin: checkin.mydate.formatted,
            checkout: checkout.mydate.formatted,
            adults: adults,
            children: children,
            page: 1
            }
        });
    }

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd.mm.yyyy',
    }
}
