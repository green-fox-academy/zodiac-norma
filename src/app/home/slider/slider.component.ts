import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {

  constructor(private request: AppService) { }

  ngOnInit() {
    this.request.getData('https://bookingnorma.glitch.me/slider')
    .subscribe(
        (response: Response) => {
          let sliderData = response.json();
          this.createImageObjects(sliderData)
        },
        (error) => console.log(error)
      );
  }
  
  imageData = [];
  classIndex = 0;

  createImageObjects(data) {
    for (let i = 0; i < data.length; i++) {
      this.imageData.push({file: data[i].image, class: 'default', title: data[i].title, subtitle: data[i].subtitle})
    }
    this.imageData[0].class = 'current-front';
    }
    
  setClassIndex(x, className) {
    this.classIndex += x;   //increments translated class back or forth
    
    if (this.classIndex > 0 && this.classIndex < this.imageData.length) {  //between the ends of the array
      this.imageData[this.imageData.length-1].class = 'default';  //last image to default
      this.imageData[0].class = 'default';  //first to be displayed
    } else if (this.classIndex === this.imageData.length) {
        this.classIndex = 0;  //if reaching the end of array+1, set class at the start 
    } else if (this.classIndex === -1){
        this.classIndex = this.imageData.length-1; //if reaching start-1, set class at the end
    }
    this.setClassNames(x, className);
  }

  setClassNames(x, className) {
    this.imageData[this.classIndex].class = className;
    if (x === 1 && this.classIndex === 0) {   //reaching end of array when clicking forward
      this.startOver(this.imageData.length-1, this.imageData.length-2);   //last image set to be displayed during animation
    } else if (x === -1 && this.classIndex === this.imageData.length-1) {  //reaching end of array when clicking backward
      this.startOver(0, 1); //first image set to be displayed during animation
    } else {
      this.imageData[this.classIndex-x].class = 'current-front'; //
      if (this.imageData[this.classIndex-(2*x)]) {
        this.imageData[this.classIndex-(2*x)].class = 'default';
      }
    }
  }

  startOver(last, beforeLast) {
    this.imageData[last].class = 'current-front';
    this.imageData[beforeLast].class = 'default';
  }
}
