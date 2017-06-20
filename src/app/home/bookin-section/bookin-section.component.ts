import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-bookin-section',
  templateUrl: './bookin-section.component.html',
  styleUrls: ['./bookin-section.component.scss']
})

export class BookinSectionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  roomsinList = ['single room', 'double room', 'extra view room', 'luxory room'];
  inputValues = [];

  pushItem(roomType, checkin, checkout, adults, children) {
    console.log(checkin.mydate);
    
    /*if (checkin.mydate === undefined) {
      checkin.mydate = {
        formatted: ""
      }
    }
    if (checkout.mydate === undefined) {
      checkout.mydate = {
      formatted: ""
      }
    }*/
      
      this.inputValues = [];
      this.inputValues.push(roomType, checkin.mydate.formatted, checkout.mydate.formatted, adults, children);
      console.log(this.inputValues);
  }

  myDatePickerOptions: IMyDpOptions = {
          // other options...
          dateFormat: 'dd.mm.yyyy',
      };
}
