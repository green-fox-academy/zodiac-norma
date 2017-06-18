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

  //rawData = [{src: 'http://lorempixel.com/400/200/sports/'}, {src: 'http://lorempixel.com/400/205/sports/'}, {src: 'http://lorempixel.com/400/210/sports/'}, {src: 'http://lorempixel.com/400/215/sports/'}, {src: 'http://lorempixel.com/400/220/sports/'}];
  rawData = [
    {src: 'img1.jpg', destination: 'Budapest, Hungary', subtitle: 'The best city ever'}, 
    {src: 'img2.jpg', destination: 'Budapest, Hungary', subtitle: 'The best city ever'}, 
    {src: 'img3.jpg', destination: 'Budapest, Hungary', subtitle: 'The best city ever'}, 
    {src: 'img4.jpg', destination: 'Budapest, Hungary', subtitle: 'The best city ever'}, 
    {src: 'img5.jpg', destination: 'Budapest, Hungary', subtitle: 'The best city ever'}, 
    {src: 'img6.jpg', destination: 'Budapest, Hungary', subtitle: 'The best city ever'}, 
    {src: 'img7.jpg', destination: 'Budapest, Hungary', subtitle: 'The best city ever'}
  ];
  
  imageData = [];
  classIndex = 0;

  createObject() {
    for (let i = 0; i < this.rawData.length; i++) {
      this.imageData.push({file: this.rawData[i].src, class: 'img-item', destination: this.rawData[i].destination, subtitle: this.rawData[i].subtitle})
    }
    this.imageData[0].class = 'current-front';
    return this.imageData
  }
    
  setClassIndex(x, className) {
    this.classIndex += x;
    if (this.classIndex > 0 && this.classIndex < this.imageData.length) {
      this.imageData[this.imageData.length-1].class = 'img-item';
      this.imageData[0].class = 'img-item';
    } else if (this.classIndex === this.imageData.length) {
        this.classIndex = 0;
    } else if (this.classIndex === -1){
        this.classIndex = this.imageData.length-1;
    }
    this.setClassNames(className, x)
  }

  setClassNames(className, x) {
    this.imageData[this.classIndex].class = className;

    if (x === 1 && this.classIndex === 0) {
      this.startAgainForward();
    } else if (x === -1 && this.classIndex === this.imageData.length-1) {
      this.startAgainBackward();
    } else {
      this.imageData[this.classIndex-x].class = 'current-front';
      if (this.imageData[this.classIndex-(2*x)]) {
        this.imageData[this.classIndex-(2*x)].class = 'img-item';
      }
    }
  }

  startAgainForward() {
    this.imageData[this.imageData.length-1].class = 'current-front';
    this.imageData[this.imageData.length-2].class = 'img-item';
  }

  startAgainBackward() {
    this.imageData[0].class = 'current-front';
    this.imageData[1].class = 'img-item'; 
  }
}