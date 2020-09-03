import { Component, OnInit } from '@angular/core';
import { HurbService } from '../service/hurb.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {

  hotels: Array<any>
  newHotels: Array<any>
  amenities: Array<any>
  types: Array<any>
  location: string
  stars: string

  constructor(private hurbService: HurbService){}

  getLocation(evento: KeyboardEvent){
    this.location = (<HTMLInputElement>evento.target).value;
  }

  getHotels(){
    this.hurbService.getData(this.location, 'hotel').subscribe((data) => {
      this.hotels = data.results;
      console.log(this.hotels);
    })
  }

  showStars(rating) {
    this.items = [];

    for(let i=0; i<rating; i++){
      this.items.push(i);
    }

    return this.items;
  }

}
