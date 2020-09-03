import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HurbService } from '../service/hurb.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {

  hotels: Array<any>
  newHotels: Array<any>
  types: Array<any>
  location: string
  stars: string
  pagination: any
  currentPage: number

  constructor(private hurbService: HurbService, private titleService: Title){
    this.currentPage = 1;
  }

  getLocation(evento: KeyboardEvent){
    this.location = (<HTMLInputElement>evento.target).value;
  }

  getHotels(page = 1) {
    this.hurbService.getData(this.location, 'hotel', page).subscribe((data) => {
      this.hotels = data.results;
      this.pagination = data.pagination;

      this.titleService.setTitle(`Hotéis e Pacotes Para ${this.location} | Agência de Viagens - Hurb`);
    })
    this.currentPage = page;
  }

  showStars(rating) {
    this.items = [];

    for(let i=0; i<rating; i++){
      this.items.push(i);
    }

    return this.items;
  }

  showAmenities(amenities) {
    this.items = [];

    if(amenities.length >= 3) {
      for(let i=0; i<3; i++){
        this.items.push(amenities[i]);
      }
    }
    else {
      for(let i=0; i<amenities.length; i++){
        this.items.push(amenities[i]);
      }
    }

    return this.items;
  }

}
