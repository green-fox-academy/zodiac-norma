import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { BookinSectionComponent } from './bookin-section/bookin-section.component';
import { TopHotelsComponent } from './top-hotels/top-hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BookinSectionComponent,
    TopHotelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
