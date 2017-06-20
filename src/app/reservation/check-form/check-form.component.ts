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

  searchInputs = [];

  collectItem(checkin, checkout, adults, children) {
    this.searchInputs = [];
    
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

    this.searchInputs.push(checkin.mydate.formatted, checkout.mydate.formatted, adults, children);
    console.log(this.searchInputs);
  }

}
