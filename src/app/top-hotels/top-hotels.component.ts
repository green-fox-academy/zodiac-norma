import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
 

@Component({
  selector: 'app-top-hotels',
  templateUrl: './top-hotels.component.html',
  styleUrls: ['./top-hotels.component.scss'],
  providers: [TopHotelsComponent]
})
export class TopHotelsComponent implements OnInit {

  hotels: {};
  post: {};

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
    var json = JSON.stringify({ var1: 'test', var2: 'proof'});
    var params = 'json' + json;
    var headers = new Headers('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://bookingnorma.glitch.me/proof-post', params).map(
    res => res.json()
    ).subscribe(
    (post => {
      this.post = post
      console.log(post);
      
    })
    )
  }

  ngOnInit() {
    this.fetchData(),
    this.postData()
  }
}


