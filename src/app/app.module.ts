import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HurbService } from './service/hurb.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { PackagesComponent } from './components/packages/packages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    HomeComponent,
    HotelComponent,
    HotelsComponent,
    PackagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Title,
    HurbService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
