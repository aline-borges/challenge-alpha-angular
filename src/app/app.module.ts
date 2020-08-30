import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/searchForm/search.component';
import { HeaderComponent } from './components/header/header.component';
import { HotelListComponent } from './components/hotelsList/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    HeaderComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
