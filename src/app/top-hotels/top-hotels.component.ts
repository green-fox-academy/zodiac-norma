import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

export class Hotel {
  id: number;
  name: string;
  descr: string;
}
 

@Component({
  selector: 'app-top-hotels',
  templateUrl: './top-hotels.component.html',
  styleUrls: ['./top-hotels.component.scss']
})
export class TopHotelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


