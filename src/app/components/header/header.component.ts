import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  hotel: string
  package: string

  constructor() {}

  selectedMenuOption() {
    this.hotel = (<HTMLInputElement>document.getElementById('hotelOption'));
    this.package = (<HTMLInputElement>document.getElementById('packageOption'));

  }

  ngOnInit() {
    this.selectedMenuOption();
  }

}
