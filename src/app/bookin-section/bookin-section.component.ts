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
  peopleinList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  inputValues = [];

  pushItem(roomType, checkin, checkout, adults, children) {
      this.inputValues = [];
      this.inputValues.push(roomType, checkin.mydate.formatted, checkout.mydate.formatted, adults, children);
      if (this.inputValues[3] == "") {
          this.inputValues[3] = "1";
      }
      if (this.inputValues[4] == "") {
          this.inputValues[4] = "0";
      }
      console.log(this.inputValues);
  }

  myDatePickerOptions: IMyDpOptions = {
          // other options...
          dateFormat: 'dd.mm.yyyy',
      };
}
