import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { HurbService } from '../../service/hurb.service';
import { HeaderComponent } from './../header/header.component';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  hotels: Array<any>
  location: string
  name: string
  stars: Array<any>
  pagination: any
  currentPage: number
  quantity: string
  place: string
  price: Array<any>
  minPrice: string
  maxPrice: string
  amenities: Array<any>
  rating: Array<any>
  select: string
  valueSlider: string
  value: string
  typeSearchOption: string
  packageImage: Array<any>
  smallDescription: string

  constructor(private hurbService: HurbService, private router: Router, private titleService: Title){
    const nav = this.router.getCurrentNavigation();
    this.hotels = nav.extras.state.hotels;
    
    this.currentPage = 1;
  }
  
  getLocation(evento: KeyboardEvent, value: string){
    if(value !== null) {
      this.location = value;
    }

    this.location = (<HTMLInputElement>document.getElementById('input-hotel')).value;
  }

  onSendTypeSearch(event) {
    this.typeSearchOption = event;
  }

  getHotels(page = 1, typeSearchOption, order: string, limited: string, quantityStars: Array<any>) {
    this.hurbService.getData(this.location, this.typeSearchOption, page, order, limited, quantityStars).subscribe((data) => {
      this.hotels = data.results;
      this.pagination = data.pagination;
      this.quantity = data.meta.count;
      this.place = data.meta.query;
      this.price = data.results.price;
      this.stars = data.results.stars;
      this.minPrice = ((data.filters.priceInterval.min)/100).toFixed(0);
      this.maxPrice = ((data.filters.priceInterval.max)/100).toFixed(0);

      this.titleService.setTitle(`Hotéis e Pacotes Para ${this.location} | Agência de Viagens - Hurb`);
    })

    this.currentPage = page;
    this.quantity;
    this.place;

    window.scrollTo(0, 0);
  }

  changeHotelPackageFilter(){
  } 

  showForm() {
    const showSearch = (<HTMLInputElement>document.getElementById('show-search-button'));
    const formHotel = (<HTMLInputElement>document.getElementById('form-hotel-page'));

    formHotel.style.display === 'none' ? formHotel.style.display = 'flex' : formHotel.style.display = 'none';
  }

  showFilters() {
    const ordenation = (<HTMLInputElement>document.getElementById('ordenation'));

    ordenation.style.display === 'none' ? ordenation.style.display = 'flex' :
    ordenation.style.display = 'none';
  }

  orderBy(){
    this.select = (<HTMLInputElement>document.getElementById("selectOrder")).value;

    if(this.select === 'moreRelevance') {
      return this.getHotels(1, null,'&sort=score&sortOrder=DESC',null, null);
    }

    if(this.select  === 'lowPrice') {
      return this.getHotels(1, null,'&sort=price&sortOrder=ASC',null, null);
    }

    if(this.select  === 'highPrice') {
      return this.getHotels(1, null,'&sort=price&sortOrder=DESC',null, null);
    }

  }

  limitedByPrice(){
    this.valueSlider = (<HTMLInputElement>document.getElementById('range')).value;

    return this.getHotels(1,null, null, `1,,price_max_${this.valueSlider}00|1`, null);
  }

  getHotelsByStars() {
    const fiveStars = (<HTMLInputElement>document.getElementById('five-stars'));
    const fourStars = (<HTMLInputElement>document.getElementById('four-stars'));
    const threeStars = (<HTMLInputElement>document.getElementById('three-stars'));
    const twoStars = (<HTMLInputElement>document.getElementById('two-stars'));
    const oneStar = (<HTMLInputElement>document.getElementById('one-star'));
    const stars = [fiveStars, fourStars, threeStars, twoStars, oneStar];
    const starsValue = []

    const isChecked = (star) => {
      if(star.checked === true) {
        starsValue.push(star.value);
      }
    }

    const newArray = stars.filter(isChecked);

    return this.getHotels(1,null, null, null, starsValue);
  }

  sendLocationToInput() {
    const name = (<HTMLInputElement>document.getElementById('place-name')).value;
    let input = (<HTMLInputElement>document.querySelector('.search-input'));
    input.value = name;

    return this.getLocation(null, name);
  }

  backToTop() {
    window.scrollTo(0, 0);
  }

  showStars(rating) {
    this.rating = [];

    for(let i=0; i<rating; i++){
      this.rating.push(i);
    }

    return this.rating;
  }

  showAmenities(amenities) {
    this.amenities = [];

    if(amenities.length >= 3) {
      for(let i=0; i<2; i++){
        this.amenities.push(amenities[i]);
      }
    }
    else {
      for(let i=0; i<amenities.length; i++){
        this.amenities.push(amenities[i]);
      }
    }

   return this.amenities
  }

  rangeValue(){
     this.value = (<HTMLInputElement>document.getElementById('range')).value;
  }

  ngOnInit():void {
  }

}
