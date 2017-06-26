import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
    selector: 'app-check-form',
    templateUrl: './check-form.component.html',
    styleUrls: ['./check-form.component.scss']
})
export class CheckFormComponent implements OnInit {

    private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd.mm.yyyy',
    };

    constructor() { }

    ngOnInit() {
    }

    allInputs = [];

    collectInput(checkin, checkout, rooms, adults, children) {
        this.allInputs = [];

        if (checkin.mydate === undefined || checkin.mydate === null) {
            checkin.mydate = {
                formatted: ""
            }
        }
        if (checkout.mydate === undefined || checkin.mydate === null) {
            checkout.mydate = {
                formatted: ""
            }
        }

        this.allInputs.push(checkin.mydate.formatted, checkout.mydate.formatted, rooms, adults, children);
        console.log(this.allInputs);
    }

}
