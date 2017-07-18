import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { Router } from '@angular/router';

@Component({
    selector: 'app-check-form',
    templateUrl: './check-form.component.html',
    styleUrls: ['./check-form.component.scss']
})
export class CheckFormComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToPage(location, checkin, checkout, adults, children) {
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
        this.router.navigate(['/hotels'],
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
