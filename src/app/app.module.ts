import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SliderComponent } from './slider/slider.component';
import { BookinSectionComponent } from './bookin-section/bookin-section.component';
import { TopHotelsComponent } from './top-hotels/top-hotels.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes =[
  { path: '', component: AppComponent },
  { path: 'reservation', component: ReservationComponent }
];

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
    MyDatePickerModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [TopHotelsComponent, SliderComponent, BookinSectionComponent, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
