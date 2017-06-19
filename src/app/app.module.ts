import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { BookinSectionComponent } from './bookin-section/bookin-section.component';
import { TopHotelsComponent } from './top-hotels/top-hotels.component';
import { TopHotelsService } from './top-hotels/top-hotels.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BookinSectionComponent,
    TopHotelsComponent,
    // TopHotelsService,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],

  providers: [TopHotelsComponent, TopHotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
