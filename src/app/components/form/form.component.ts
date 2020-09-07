import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HurbService } from '../../service/hurb.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  hotels: Array<any>
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
      console.log(this.hotels);

      this.titleService.setTitle(`Hotéis e Pacotes Para ${this.location} | Agência de Viagens - Hurb`);
    })
    this.currentPage = page;

    document.getElementById('home-page').style.display = 'none';
    document.getElementById('hotel-page').style.display = 'flex';
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
      for(let i=0; i<2; i++){
        this.items.push(amenities[i]);
      }
    }
    else {
      for(let i=0; i<amenities.length; i++){
        this.items.push(amenities[i]);
      }
    }

   return this.items
  }

}
