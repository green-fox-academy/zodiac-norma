import { Component, OnInit, ElementRef } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../app.service';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnInit {
    private nativeElement: Node;
	private notNodeElement;

    endpoint: string;
    thumbNailNeed: string;

	constructor(private request: AppService, element : ElementRef) {
        this.nativeElement = element.nativeElement;
		this.notNodeElement = element.nativeElement;
	}

	ngOnInit() {


        this.endpoint = this.nativeElement.attributes[1].value;
        this.thumbNailNeed = this.nativeElement.attributes[2].value;

		this.request.getData('https://two-ferns.glitch.me/'+this.endpoint)
			.subscribe(
			(response: Response) => {
				let sliderData = response.json();
				this.createImageObjects(sliderData)
                if (this.thumbNailNeed === 'true') {
                    this.createThumbNails(sliderData)
                }
			},
			(error) => console.log(error)
			);
	}


	imageData = [];
    thumbImages = [];
	classIndex = 0;


    createThumbNails(thumbData) {
        for (let i = 0; i < thumbData.length; i++) {
			this.thumbImages.push( thumbData[i].image )
		}
    }

	showAsMainImage(clickedIndex) {

		this.imageData.forEach(function(element){
			element.class = 'default'
		})

		this.imageData[clickedIndex].class = 'current-front';

		this.classIndex = clickedIndex;
	}


	createImageObjects(data) {
		for (let i = 0; i < data.length; i++) {
			this.imageData.push({ file: data[i].image, class: 'default', title: data[i].title, subtitle: data[i].subtitle })
		}
		this.imageData[0].class = 'current-front';
	}

	setClassIndex(x, className) {
		this.classIndex += x;

		if (this.classIndex > 0 && this.classIndex < this.imageData.length) {
			this.imageData[this.imageData.length - 1].class = 'default';
			this.imageData[0].class = 'default';
		} else if (this.classIndex === this.imageData.length) {
			this.classIndex = 0;
		} else if (this.classIndex === -1) {
			this.classIndex = this.imageData.length - 1;
		}
		this.setClassNames(x, className);
	}

	setClassNames(x, className) {
		this.imageData[this.classIndex].class = className;
		if (x === 1 && this.classIndex === 0) {
			this.startOver(this.imageData.length - 1, this.imageData.length - 2);
		} else if (x === -1 && this.classIndex === this.imageData.length - 1) {
			this.startOver(0, 1);
		} else {
			this.imageData[this.classIndex - x].class = 'current-front';
			if (this.imageData[this.classIndex - (2 * x)]) {
				this.imageData[this.classIndex - (2 * x)].class = 'default';
			}
		}
	}

	startOver(last, beforeLast) {
		this.imageData[last].class = 'current-front';
		this.imageData[beforeLast].class = 'default';
	}
}
