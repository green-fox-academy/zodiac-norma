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
  rawData = [{src: 'img1.jpg'}, {src: 'img2.jpg'}, {src: 'img3.jpg'}, {src: 'img4.jpg'}, {src: 'img5.jpg'}, {src: 'img6.jpg'}, {src: 'img7.jpg'}];
  
  imageData = [];
  classIndex = 0;

  createObject() {
    for (let i = 0; i < this.rawData.length; i++) {
      this.imageData.push({file: this.rawData[i].src, class: 'img-item'})
    }
    this.imageData[0].class = 'actual-front';
    return this.imageData
  }

  setClassIndex(x, className) {
    if (this.classIndex >= 0 && this.classIndex < this.rawData.length-1) {
      this.classIndex += x;
      this.imageData[this.imageData.length-1].class = 'img-item';
    } else if (this.classIndex === this.rawData.length-1) {
        this.classIndex = 0;
    } else if (this.classIndex === 0){
        this.classIndex = this.rawData.length-1
    }
    if (x === 1) {
      this.setClassesForward(className, x)
    } else if (x === -1) {
      this.setClassesBackward(className, x)
    }
  }

  setClassesForward(classInput, x) {
    this.imageData[this.classIndex].class = classInput;
    if (this.classIndex === 0) {
      this.imageData[this.imageData.length-1].class = 'actual-front';
      this.imageData[this.imageData.length-2].class = 'img-item';
    } else {
      this.imageData[this.classIndex-x].class = 'actual-front';
      this.imageData[this.classIndex-(2*x)].class = 'img-item';
    }
  }

  setClassesBackward(classInput, x) {
    this.imageData[this.classIndex].class = classInput;
    if (this.classIndex === this.imageData.length-1) {
      this.imageData
    }
    this.imageData[this.classIndex-x].class = 'actual-front';
    this.imageData[this.classIndex-(2*x)].class = 'img-item';
    //if (this.imageData)
  
  }
  
  

  /*shiftArrayForward(className) {

    this.rawData.splice(this.rawData.length, 0, this.rawData[0])
    this.rawData.shift()
    this.imageData = []
    this.createObject(className, 0)
    console.log(this.imageData);
    
  }

  shiftArrayBackward(className) {
    this.rawData.splice(0, 0, this.rawData[this.rawData.length-1]);
    this.rawData.splice(this.rawData.length-1, 1);

    this.imageData = []
    this.createObject(className, 0);
  }*/
}