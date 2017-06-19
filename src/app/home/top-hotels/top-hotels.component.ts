import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
// import { TopHotelsService } from './top-hotels.service';
 

@Component({
  selector: 'app-top-hotels',
  templateUrl: './top-hotels.component.html',
  styleUrls: ['./top-hotels.component.scss'],
  // providers: [AppService]
})
export class TopHotelsComponent implements OnInit {

  hotels: {};

  constructor(private appService: AppService) { }

  // fetchData(){
  //   this.appService.getData('')
      
    // return this.http.get('https://bookingnorma.glitch.me/toprooms').map(
    // (response => response.json())
    // ).subscribe(
    // (hotels => {
    //   this.hotels = hotels
    // }) 
    // )
  // }


  ngOnInit() {
    this.appService.getData('https://bookingnorma.glitch.me/toprooms')
    .subscribe(
        (response: Response) => {
          const hotelsData = response.json();
          this.hotels = hotelsData;
        },
        (error) => console.log(error)  
      );
  }
}


