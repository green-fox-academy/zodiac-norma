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

  inputValues = [];

  pushItem(roomType, checkin, checkout, adults, children) {
      this.inputValues = [];
      this.inputValues.push(roomType, checkin.mydate.formatted, checkout.mydate.formatted, adults, children);
      console.log(this.inputValues);
  }

  myDatePickerOptions: IMyDpOptions = {
          // other options...
          dateFormat: 'dd.mm.yyyy',
      };
}
