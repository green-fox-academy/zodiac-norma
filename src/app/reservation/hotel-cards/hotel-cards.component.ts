import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-hotel-cards',
  templateUrl: './hotel-cards.component.html',
  styleUrls: ['./hotel-cards.component.scss']
})
export class HotelCardsComponent implements OnInit {

  rooms = [];
  tenRooms = [1, 2, 3, 4, 5];
  

  constructor(private roomData: AppService) { }

  ngOnInit() {
     this.roomData.getData('https://bookingnorma.glitch.me/rooms')
    .subscribe(
        (response: Response) => {
          const cardData = response.json();
          this.rooms = cardData;
          for (let i = 0; i<this.rooms.length; i++){
            console.log(this.rooms[i].features.length);
            
          }

          
        },
        (error) => console.log(error)  
      );
  }

}
