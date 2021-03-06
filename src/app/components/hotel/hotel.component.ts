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

  tickets: Array<any>
  packages: Array<any>
  photo: string
  smallDescription: string
  tags: Array<any>
  people: string
  night: string
  city: string
  state: string
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

  constructor(private hurbService: HurbService, private router: Router, private titleService: Title){
    const nav = this.router.getCurrentNavigation();
    if (nav.extras.state) {
      this.hotels = nav.extras.state.hotels;
      this.currentPage = nav.extras.state.page;
      this.pagination = nav.extras.state.pagination;
      this.quantity = nav.extras.state.quantity;
      this.place = nav.extras.state.place;
      this.location = nav.extras.state.place;
    }
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

  getAPI(page = 1, typeSearchOption, order: string, limited: string, quantityStars: Array<any>) {
    this.hurbService.getData(this.location, this.typeSearchOption, page, order, limited, quantityStars).subscribe((data) => {
     
      if(this.typeSearchOption === 'offer') {
        this.packages = data.results;

        if(this.packages !== null) {
          
          if(data?.pagination !== undefined){
            this.pagination = data.pagination;
          }

          this.quantity = data.meta.count;
          this.place = data.meta.query;
          this.price = data.results.price;
          this.stars = data.results.stars;
  
          if(data?.filters?.priceInterval?.min !== undefined) {
            this.minPrice = ((data.filters.priceInterval.min)/100).toFixed(0);
            this.maxPrice = ((data.filters.priceInterval.max)/100).toFixed(0);
          }
  
          this.currentPage = page;

          const activeSearch = document.querySelector('.underlinedMenuSelection').getAttribute('id');

          this.router.navigateByUrl('/packages', {
            state: {
              packages: this.packages,
              page: this.currentPage,
              pagination: this.pagination,
              quantity: this.quantity,
              place: this.place,
              location: this.location,
              active: activeSearch
            }
          })
        }

        this.titleService.setTitle(`Pacotes para ${this.location} | Agência de Viagens - Hurb`);
      }
      else if(this.typeSearchOption === 'ticket') {
        this.tickets = data.results;

        if(this.tickets !== null) {
          
          if(data?.pagination !== undefined){
            this.pagination = data.pagination;
          }

          this.quantity = data.meta.count;
          this.place = data.meta.query;
          this.price = data.results.price;
          this.stars = data.results.stars;
  
          if(data?.filters?.priceInterval?.min !== undefined) {
            this.minPrice = ((data.filters.priceInterval.min)/100).toFixed(0);
            this.maxPrice = ((data.filters.priceInterval.max)/100).toFixed(0);
          }
  
          this.currentPage = page;

          const activeSearch = document.querySelector('.underlinedMenuSelection').getAttribute('id');
          this.router.navigateByUrl('/tickets', {
            state: { 
              tickets: this.tickets, 
              page: this.currentPage, 
              pagination: this.pagination,
              quantity: this.quantity,
              place: this.place,
              location: this.location,
              active: activeSearch
            }
          });
        }

        this.titleService.setTitle(`Atividades para ${this.location} | Agência de Viagens - Hurb`);
      }
      else {
        this.hotels = data.results;

        if(this.hotels !== null) {
          
          if(data?.pagination !== undefined){
            this.pagination = data.pagination;
          }
          
          this.quantity = data.meta.count;
          this.place = data.meta.query;
          this.price = data.results.price;
          this.stars = data.results.stars;
  
          if(data?.filters?.priceInterval?.min !== undefined) {
            this.minPrice = ((data.filters.priceInterval.min)/100).toFixed(0);
            this.maxPrice = ((data.filters.priceInterval.max)/100).toFixed(0);
          }
  
          this.currentPage = page;

          const activeSearch = document.querySelector('.underlinedMenuSelection').getAttribute('id');

          this.router.navigateByUrl('/hotels', {
            state: { 
              hotels: this.hotels, 
              page: this.currentPage, 
              pagination: this.pagination,
              quantity: this.quantity,
              place: this.place,
              location: this.location,
              active: activeSearch
            }
          });
        }
  
        this.titleService.setTitle(`Hotéis para ${this.location} | Agência de Viagens - Hurb`);
      }
    })

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
      return this.getAPI(1, null,'&sort=score&sortOrder=DESC',null, null);
    }

    if(this.select  === 'lowPrice') {
      return this.getAPI(1, null,'&sort=price&sortOrder=ASC',null, null);
    }

    if(this.select  === 'highPrice') {
      return this.getAPI(1, null,'&sort=price&sortOrder=DESC',null, null);
    }

  }

  limitedByPrice(){
    this.valueSlider = (<HTMLInputElement>document.getElementById('range')).value;

    return this.getAPI(1,null, null, `1,,price_max_${this.valueSlider}00|1`, null);
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

    return this.getAPI(1,null, null, null, starsValue);
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
