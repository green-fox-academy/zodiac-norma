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

  rawData = [{src: 'img1.jpg'}, {src: 'img2.jpg'}, {src: 'img3.jpg'}, {src: 'img4.jpg'}, {src: 'img5.jpg'}];
  imageData = [];
  
  createObject() {
    for (let i = 0; i < this.rawData.length; i++) {
      this.imageData.push({file: this.rawData[i].src, class: 'imgItem'})
    }
    /*this.imageData[1].class = 'translated'*/
    return this.imageData
  }



  shiftArray(className, original) {
    this.rawData.splice(this.rawData.length, 0, this.rawData[0])
    this.rawData.shift()
    this.imageData = []
    this.createObject()
    this.imageData[1].class += " " + className;
    //this.imageData[1].class = original;
    //console.log(this.rawData);
    console.log(this.imageData);

  }
  
}
