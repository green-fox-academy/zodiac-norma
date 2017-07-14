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

    adultsInput = true;
    childrenInput = true;
    checkinInput = true;
    checkoutInput = true;

    isValid(location, checkin, checkout, adults, children) {

        location = location.value;
        checkin = checkin.value;
        checkout = checkout.value;
        adults = adults.value;
        children = children.value;

        if (adults == '' || adults < 1) {
            this.adultsInput = false;
        }
        else {
            this.adultsInput = true;
        }
        if (children == '' || children < 0) {
            this.childrenInput = false;
        }
        else {
            this.childrenInput = true;
        }

        if (checkin.length !== 10) {
            this.checkinInput = false;
        }
        else {
            this.checkinInput = true;
        }

        if (checkin[2] !== '.' || checkin[5] !== '.') {
            this.checkinInput = false;
        }
        else {
            this.checkinInput = true;
        }

        for (let i = 0; i < checkin.length; i++) {
            if (i !== 2 && i !== 5) {
                if (typeof this.checkinInput !== 'number') {
                    this.checkinInput = false;
                }
                else {
                    this.checkinInput = true;
                }
            }
        }

        if (checkout.length !== 10) {
            this.checkoutInput = false;
        }
        else {
            this.checkoutInput = true;
        }

        if (checkout[2] !== '.' || checkout[5] !== '.') {
            this.checkoutInput = false;
        }
        else {
            this.checkoutInput = true;
        }

        for (let i = 0; i < checkout.length; i++) {
            if (i !== 2 && i !== 5) {
                if (typeof this.checkoutInput !== 'number') {
                    this.checkoutInput = false;
                }
                else {
                    this.checkoutInput = true;
                }
            }
        }

        if (checkin.mydate === undefined || checkin.mydate.formatted === '') {
            checkin.mydate = {
                formatted: ""
            }
            this.checkinInput = true;
        }
        if (checkout.mydate === undefined || checkout.mydate.formatted === '') {
            checkout.mydate = {
                formatted: ""
            }
            this.checkoutInput = true;
        }

        this.decorator(location, checkin, checkout, adults, children);
        console.log(this.checkinInput, this.checkoutInput, this.adultsInput, this.childrenInput);
        if (this.checkinInput === true && this.checkoutInput === true && this.adultsInput === true && this.childrenInput === true) {
            this.goToPage(location, checkin, checkout, adults, children);
        }
    }

    decorator(location, checkin, checkout, adults, children) {
        console.log(children.value);
        if (this.childrenInput == false) {
            console.log(children);
        }
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
