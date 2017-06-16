import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
  constructor() { 
    this.createObject()
  }

   ngOnInit() {
  }

  rawData = [{src: 'http://lorempixel.com/400/200/sports/'}, {src: 'http://lorempixel.com/400/205/sports/'}, {src: 'http://lorempixel.com/400/210/sports/'}, {src: 'http://lorempixel.com/400/215/sports/'}, {src: 'http://lorempixel.com/400/220/sports/'}];
  imageData = [];
  
  createObject() {
    for (let i = 0; i < this.rawData.length; i++) {
      this.imageData.push({file: this.rawData[i].src, class: 'imgItem'})
    }

    return this.imageData
  }

  fadeIn() {
    this.imageData[1].class = 'fade';
  }

  animate = false;
  shiftArray(className) {
    this.rawData.splice(this.rawData.length, 0, this.rawData[0])
    this.rawData.shift()
    this.imageData = []
    this.createObject()
    this.imageData[1].class = className;
    //this.imageData[1].class = fadein;
    //this.imageData[1].class = original;
    //console.log(this.rawData);
    
    this.animate = true
    console.log(this.imageData);

  }
  
}
