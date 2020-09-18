import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output, NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output() sendTypeSearch = new EventEmitter();
  @Output() sendTypeSearchHotel = new EventEmitter();

  hotel: any
  package: any
  
  constructor() {}

  selectedMenuOption() {
    this.hotel = (<HTMLInputElement>document.getElementById('hotelOption'));
    this.package = (<HTMLInputElement>document.getElementById('packageOption'));

    this.hotel.addEventListener('click', () => {
      this.hotel.classList.add('underlinedMenuSelection');
      this.package.classList.remove('underlinedMenuSelection');
      console.log('hotel foi clicado');
      this.sendTypeSearch.emit('hotel');
      this.sendTypeSearchHotel.emit('hotel');
    });

    this.package.addEventListener('click', () => {
      this.package.classList.add('underlinedMenuSelection');
      this.hotel.classList.remove('underlinedMenuSelection');
      console.log('pacote foi clicado');
      this.sendTypeSearch.emit('offer');
      this.sendTypeSearchHotel.emit('hotel');
    });

  }

  ngOnInit() {
    this.selectedMenuOption();
  }

}
