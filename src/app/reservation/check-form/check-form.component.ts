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

    adultsInput = true;
    childrenInput = true;
    checkinInput = true;
    checkoutInput = true;
    adultsFalseClass = '';
    childrenFalseClass = '';
    checkoutCoverClass = '';
    checkinCoverClass = '';

    isValid(location, checkin, checkout, adults, children) {
        console.log(checkin.value.mydate);
        if (checkin.value.mydate === null) {
            checkin.value.mydate = {
                formatted: "ERROR"
            }
            this.checkinInput = false;
        }

        if (checkout.value.mydate === null) {
            checkout.value.mydate = {
                formatted: "ERROR"
            }
            this.checkoutInput = false;
        }

        if (checkin.value.mydate === undefined || checkin.value.mydate.formatted === '') {
            checkin.value.mydate = {
                formatted: ""
            }
            this.checkinInput = true;
            this.checkinCoverClass = '';
        }

        if (checkout.value.mydate === undefined || checkout.value.mydate.formatted === '') {
            checkout.value.mydate = {
                formatted: ""
            }
            this.checkoutInput = true;
            this.checkoutCoverClass = '';
        }

        if (adults.value == '' || adults.value < 1) {
            this.adultsInput = false;
            this.adultsFalseClass = 'inputFalse';
        }
        else {
            this.adultsInput = true;
            this.adultsFalseClass = '';
        }
        if (children.value == '' || children.value < 0) {
            this.childrenInput = false;
            this.childrenFalseClass = 'inputFalse';
        }
        else {
            this.childrenInput = true;
            this.childrenFalseClass = '';
        }

        if (checkin.value.mydate.formatted.length !== 10) {
            this.checkinInput = false;
            this.checkinCoverClass = 'coverTrue';
        }
        else {
            this.checkinInput = true;
            this.checkinCoverClass = '';
        }

        if (checkin.value.mydate.formatted[2] !== '.' || checkin.value.mydate.formatted[5] !== '.') {
            this.checkinInput = false;
            this.checkinCoverClass = 'coverTrue';
        }
        else {
            this.checkinInput = true;
            this.checkinCoverClass = '';
        }

        for (let i = 0; i < checkin.value.mydate.formatted.length; i++) {
            if (i !== 2 && i !== 5) {
                if (isNaN(parseInt(checkin.value.mydate.formatted[i]) / 1)) {
                    this.checkinInput = false;
                    this.checkinCoverClass = 'coverTrue';
                }
                else {
                    this.checkinInput = true;
                    this.checkinCoverClass = '';
                }
            }
        }

        if (checkout.value.mydate.formatted.length !== 10) {
            this.checkoutInput = false;
            this.checkoutCoverClass = 'coverTrueOut';
        }
        else {
            this.checkoutInput = true;
            this.checkoutCoverClass = '';
        }

        if (checkout.value.mydate.formatted[2] !== '.' || checkout.value.mydate.formatted[5] !== '.') {
            this.checkoutInput = false;
            this.checkoutCoverClass = 'coverTrueOut';
        }
        else {
            this.checkoutInput = true;
            this.checkoutCoverClass = '';
        }

        for (let i = 0; i < checkout.value.mydate.formatted.length; i++) {
            if (i !== 2 && i !== 5) {
                if (isNaN(parseInt(checkout.value.mydate.formatted[i]) / 1)) {
                    this.checkoutInput = false;
                    this.checkoutCoverClass = 'coverTrueOut';
                }
                else {
                    this.checkoutInput = true;
                    this.checkoutCoverClass = '';
                }
            }
        }

        if (checkin.value.mydate.formatted === '') {
            this.checkinInput = true;
            this.checkinCoverClass = '';
        }
        if (checkout.value.mydate.formatted === '') {
            this.checkoutInput = true;
            this.checkoutCoverClass = '';
        }

    }

    isValidGo(location, checkin, checkout, adults, children) {
        this.isValid(location, checkin, checkout, adults, children);
        if (this.checkinInput === true && this.checkoutInput === true && this.adultsInput === true && this.childrenInput === true) {
            this.goToPage(location, checkin, checkout, adults, children);
        }
    }

    goToPage(location, checkin, checkout, adults, children) {
        this.router.navigate(['/reservation'],
        { queryParams: {
            location: location.value,
            checkin: checkin.value.mydate.formatted,
            checkout: checkout.value.mydate.formatted,
            adults: adults.value,
            children: children.value,
            page: 1
            }
        });
    }

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd.mm.yyyy',
    }
}
