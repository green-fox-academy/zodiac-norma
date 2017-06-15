import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 

@Component({
  selector: 'app-top-hotels',
  templateUrl: './top-hotels.component.html',
  styleUrls: ['./top-hotels.component.scss'],
  providers: [TopHotelsComponent]
})
export class TopHotelsComponent implements OnInit {

  hotels: {};

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('https://bookingnorma.glitch.me/toprooms').map(
    (response => response.json())
    ).subscribe(
    (hotels => {
      this.hotels = hotels
      console.log(this.hotels[0].image);
      
    }) 
    )
  }

  postData(){
    
  }

  ngOnInit() {
    this.fetchData()
  }
}


