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
  stars: string
  pagination: any
  currentPage: number
  quantity: string
  place: string
  price: Array<any>

  constructor(private hurbService: HurbService, private titleService: Title){
    this.currentPage = 1;
  }

  getLocation(evento: KeyboardEvent, value: null){
    if(value !== null) {
      this.location = value;
    }

    this.location = document.getElementById('searchInput').value;
  }

  getHotels(page = 1) {
    this.hurbService.getData(this.location, 'hotel', page).subscribe((data) => {
      this.hotels = data.results;
      this.pagination = data.pagination;
      this.quantity = data.meta.count;
      this.place = data.meta.query;
      this.price = data.results.price;


      console.log(this.hotels);
      console.log(this.price);

      this.titleService.setTitle(`Hotéis e Pacotes Para ${this.location} | Agência de Viagens - Hurb`);
    })

    this.currentPage = page;
    this.quantity;
    this.place;

    document.getElementById('home-page').style.display = 'none';
    document.getElementById('hotel-page').style.display = 'flex';

    window.scrollTo(0, 0);
  }

  orderBy(){
    const selectBox = document.getElementById('selectOrder');
    const selectOptions = selectBox.options[selectedIndex].value;

    if(value === moreRelevance) {
      this.data.results.stars == '5';
    }

    if(value === moreRelevance) {
      this.data.results.stars == '5';
    }
  }

  getHotelsByStars() {
    const fiveStars = document.getElementById('five-stars');
    const fourStars = document.getElementById('four-stars');
    const threeStars = document.getElementById('three-stars');
    const twoStars = document.getElementById('two-stars');
    const oneStar = document.getElementById('one-stars');

    if(fiveStars.checked) { return getHotels(this.hotels.results.stars = '5') }
    if(fourStars.checked) { return this.hotels.results.stars = '4'}
    if(threeStars.checked) { return this.hotels.results.stars = '3'}
    if(twoStars.checked) { return this.hotels.results.stars = '2'}
    if(oneStar.checked) { return this.hotels.results.stars = '1'}
  }

  changeBackgroundImage() {

    const fernandoDeNoronha = {
      name: 'Fernando De Noronha',
      url: '../../../assets/images/fernando-de-noronha.png',
    };

    const portoSeguro = {
      name: 'Porto Seguro',
      url: '../../../assets/images/porto-seguro.png',
    };

    const arraialDoCabo = {
      name: 'Arraial Do Cabo',
      url: '../../../assets/images/arraial-do-cabo.png',
    };

    const vancouver = {
      name: 'Vancouver',
      url: '../../../assets/images/vancouver.png',
    };

    const santorini = {
      name: 'Santorini',
      url: '../../../assets/images/santorini.png',
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

    const bonito = {
      name: 'Bonito',
      url: '../../../assets/images/bonito.jpg',
    };

    const images = [fernandoDeNoronha, portoSeguro, arraialDoCabo, 
                    vancouver, santorini, bali,
                    kyoto, disney, bonito];

    const randomNumber = Math.floor(Math.random() * images.length);
    const bgImg = `url( ${images[randomNumber].url})`;
    const bgImgName = images[randomNumber].name;
    
    const home = document.getElementById('home-page');
    this.name = document.getElementById('place-name').innerHTML;
    
    return home.style.backgroundImage = bgImg, this.name = bgImgName;
  }

  sendLocationToInput() {
    const name = document.getElementById('place-name').value;
    let input = document.getElementById('searchInput');
    input.value = name;

    return this.getLocation(null, name);
  }

  backToTop() {
    window.scrollTo(0, 0);
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

  ngOnInit() {
    this.changeBackgroundImage();
  }

 }