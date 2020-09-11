import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hotelOptionMenu(){
    const hotelOption = (<HTMLInputElement>document.getElementById('hotelOption'));
    
    return this.getHotels('hotel');
  }

  packageOptionMenu(){
    const packageOption = (<HTMLInputElement>document.getElementById('packageOption'));
    
    return this.getHotels('package');
  }

  constructor() { }

  ngOnInit() {
  }

}
