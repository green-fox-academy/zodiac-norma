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

  private myDatePickerOptions: IMyDpOptions = {
          // other options...
          dateFormat: 'dd.mm.yyyy',
      };
}
