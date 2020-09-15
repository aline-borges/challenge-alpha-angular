import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output sendTypeSearch = new EventEmitter();

  hotel: string
  package: string
  
  constructor() {}

  selectedMenuOption() {
    this.hotel = (<HTMLInputElement>document.getElementById('hotelOption'));
    this.package = (<HTMLInputElement>document.getElementById('packageOption'));

    this.hotel.addEventListener('click', () => {
      this.hotel.classList.add('underlinedMenuSelection');
      this.package.classList.remove('underlinedMenuSelection');
      this.sendTypeSearch.emit('hotel');
    });

    this.package.addEventListener('click', () => {
      this.package.classList.add('underlinedMenuSelection');
      this.hotel.classList.remove('underlinedMenuSelection');
      this.sendTypeSearch.emit('offer');
    });
  }

  ngOnInit() {
    this.selectedMenuOption();
  }

}
