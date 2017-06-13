import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {
  }
  constructor() {
  }

  items = ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"];

  itemsFiltered = this.items;
  username: string;

  onChange = function(username) {
    this.itemsFiltered = [];
    //for (let i = 0; i < this.items.length; i++) {
     // if (this.items[i].includes(username)) {
     //   this.itemsFiltered.push(this.items[i]);
      //}
    //}

    this.itemsFiltered = this.items.filter(item => {
      return item.indexOf(username) != -1;
    });
  }
}
