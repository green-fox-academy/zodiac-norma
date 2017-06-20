import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.scss']
})
export class CheckFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  peopleinList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  numbers = [0,1,2,3,4,5,6,7,8,9,10]
}
