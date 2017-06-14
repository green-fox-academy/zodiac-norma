import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class Hotel {
  id: number;
  name: string;
  descr: string;
}
 

@Component({
  selector: 'app-top-hotels',
  templateUrl: './top-hotels.component.html',
  styleUrls: ['./top-hotels.component.scss']
})
export class TopHotelsComponent implements OnInit {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('https://bookingnorma.glitch.me/toprooms').map(
    (response) => response.json
    ).subscribe(
    (data) => console.log(data)
    
    )
  }

  ngOnInit() {
  }

}


