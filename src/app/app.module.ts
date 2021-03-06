import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { PackageComponent } from './components/package/package.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    HotelComponent,
    HomeComponent,
    HotelsComponent,
    PackagesComponent,
    PackageComponent,
    TicketComponent,
    TicketsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
