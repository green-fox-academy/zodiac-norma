import { Component } from '@angular/core';
import { TopHotelsComponent } from './top-hotels/top-hotels.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private topHotelService: TopHotelsComponent) {
  }

  ngOnInit() {
    this.topHotelService.fetchData
  }



  onChange = function(username) {
    
  }
}

