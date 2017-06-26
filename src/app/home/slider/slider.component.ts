import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
    rawData = [];
    constructor(private request: AppService) { }

    ngOnInit() {
        this.request.getData('https://bookingnorma.glitch.me/slider')
        .subscribe(
            (response: Response) => {
                const sliderData = response.json();
                this.rawData = sliderData;
                this.createObject(this.rawData)
            },
            (error) => console.log(error)
        );
    }

    imageData = [];
    classIndex = 0;

    createObject(data) {
        for (let i = 0; i < data.length; i++) {
            this.imageData.push({file: data[i].image, class: 'img-item', title: data[i].title, subtitle: data[i].subtitle})
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
