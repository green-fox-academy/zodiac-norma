import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owerview',
  templateUrl: './owerview.component.html',
  styleUrls: ['./owerview.component.scss']
})
export class OwerviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
