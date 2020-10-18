import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { HurbService } from '../../service/hurb.service';
import { HeaderComponent } from './../header/header.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

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
    this.currentPage = 1;
  }
  
  getLocation(evento: KeyboardEvent, value: string){
    if(value !== null) {
      this.location = value;
    }

    this.location = (<HTMLInputElement>document.getElementById('input-home')).value;
  }

  onSendTypeSearch(event) {
    this.typeSearchOption = event;
  }

  goToHotels(hotels: Array<any>, page: number) {
    this.router.navigateByUrl('/hotels', {
      state: { hotels: this.hotels, page: this.currentPage }
    });
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
      this.currentPage = page;

      this.titleService.setTitle(`Hotéis e Pacotes Para ${this.location} | Agência de Viagens - Hurb`);
      this.goToHotels(this.hotels, this.currentPage)
    })

    this.quantity;
    this.place;

    window.scrollTo(0, 0);
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
    let input = (<HTMLInputElement>document.querySelector('.search-input'));
    input.value = name;

    return this.getLocation(null, name);
  }

  ngOnInit() {
    this.changeBackgroundImage();
  }

 }