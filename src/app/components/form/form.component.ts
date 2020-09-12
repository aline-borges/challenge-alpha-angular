import { HttpClient } from '@angular/common/http';
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

  constructor(private hurbService: HurbService, private titleService: Title){
    this.currentPage = 1;
  }
  
  getLocation(evento: KeyboardEvent, value: string){
    if(value !== null) {
      this.location = value;
    }

    this.location = (<HTMLInputElement>document.getElementById('searchInput')).value;
  }

  getHotels(page = 1, order: string, limited: string) {
    if((order === undefined) || (order === null)) {
      order = '&sort=score' ;
    }

    this.hurbService.getData(this.location, 'hotel', page, order, limited).subscribe((data) => {
      this.hotels = data.results;
      this.pagination = data.pagination;
      this.quantity = data.meta.count;
      this.place = data.meta.query;
      this.price = data.results.price;
      this.stars = data.results.stars;
      this.minPrice = ((data.filters.priceInterval.min)/100).toFixed(0);
      this.maxPrice = ((data.filters.priceInterval.max)/100).toFixed(0);
      
      console.log(this.hotels);
      console.log(this.minPrice);

      this.titleService.setTitle(`Hotéis e Pacotes Para ${this.location} | Agência de Viagens - Hurb`);
    })

    this.currentPage = page;
    this.quantity;
    this.place;

    document.getElementById('home-page').style.display = 'none';
    document.getElementById('hotel-page').style.display = 'flex';

    window.scrollTo(0, 0);
  }

  showFilters() {
    const filterButton = (<HTMLInputElement>document.getElementById('filter-button'));
    const ordenation = (<HTMLInputElement>document.getElementById('ordenation'));
    const highLowPrice = (<HTMLInputElement>document.getElementById('selectOrder'));

    ordenation.style.display === 'none' ? ordenation.style.display = 'flex' :
    ordenation.style.display = 'none';

    highLowPrice.style.display === 'none' ? highLowPrice.style.display = 'flex' :
    highLowPrice.style.display = 'none';
  }

  orderBy(){
    this.select = (<HTMLInputElement>document.getElementById("selectOrder")).value;

    if(this.select === 'moreRelevance') {
      return this.getHotels(1,'&sort=score&sortOrder=DESC',null);
    }

    if(this.select  === 'lowPrice') {
      return this.getHotels(1,'&sort=price&sortOrder=ASC',null);
    }

    if(this.select  === 'highPrice') {
      return this.getHotels(1,'&sort=price&sortOrder=DESC',null);
    }

  }

  limitedByPrice(){
    this.valueSlider = (<HTMLInputElement>document.getElementById('range')).value;

    return this.getHotels(1,null,`1,,price_max_${this.valueSlider}00|1`);
  }

  getHotelsByStars() {

  }

  changeBackgroundImage() {

    const buzios = {
      name: 'Buzios',
      url: '../../../assets/images/buzios.png',
    }

    const fernandoDeNoronha = {
      name: 'Fernando De Noronha',
      url: '../../../assets/images/fernando-de-noronha.jpg',
    };

    const portoSeguro = {
      name: 'Porto Seguro',
      url: '../../../assets/images/porto-seguro.png',
    };

    const milao = {
      name: 'Milão',
      url: '../../../assets/images/milao.png',
    };

    const vancouver = {
      name: 'Vancouver',
      url: '../../../assets/images/vancouver.png',
    };

    const santorini = {
      name: 'Santorini',
      url: '../../../assets/images/santorini.jpg',
    };

    const bali = {
      name: 'Bali',
      url: '../../../assets/images/bali.png',
    };

    const kyoto = {
      name: 'Kioto',
      url: '../../../assets/images/kyoto.png',
    };

    const disney = {
      name: 'Disney',
      url: '../../../assets/images/disney.png',
    };

    const Jericoacoara = {
      name: 'Jericoacoara',
      url: '../../../assets/images/jericoacoara.jpg',
    };

    const images = [buzios, fernandoDeNoronha, portoSeguro, milao, 
                    vancouver, santorini, bali,
                    kyoto, disney, Jericoacoara];

    const randomNumber = Math.floor(Math.random() * images.length);
    const bgImg = `url( ${images[randomNumber].url})`;
    const bgImgName = images[randomNumber].name;
    
    const home = document.getElementById('home-page');
    this.name = document.getElementById('place-name').innerHTML;
    
    return home.style.backgroundImage = bgImg, this.name = bgImgName;
  }

  sendLocationToInput() {
    const name = (<HTMLInputElement>document.getElementById('place-name')).value;
    let input = (<HTMLInputElement>document.getElementById('searchInput'));
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
    
    (<HTMLInputElement>document.getElementById('rangeValue')).value = `Valor até: R$ ${this.value}`;
  }

  ngOnInit() {
    this.changeBackgroundImage();
  }

 }