import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { HurbService } from '../../service/hurb.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  @Input() searchOption: string
  
  value: string
  location: string
  hotels: Array<any>
  pagination: any
  quantity: string
  place: string
  price: Array<any>
  stars: Array<any>
  minPrice: string
  maxPrice: string
  submitted: boolean = false;

  constructor(private hurbService: HurbService, private titleService: Title, router: Router){}
  
  const getLocation = (evento: KeyboardEvent, value: string) => {
    console.log(value)
    if(value !== null) {
      this.location = value;
    }

    this.location = (<HTMLInputElement>document.getElementById('search-input')).value;
  }

  const getHotels = (page = 1, searchOption, order: string, limited: string, quantityStars: Array<any>) => {
    this.hurbService.getData(this.location, this.searchOption, page, order, limited, quantityStars).subscribe((data) => {
      this.hotels = data.results;
      this.pagination = data.pagination;
      this.quantity = data.meta.count;
      this.place = data.meta.query;
      this.price = data.results.price;
      this.stars = data.results.stars;
      this.minPrice = ((data.filters.priceInterval.min)/100).toFixed(0);
      this.maxPrice = ((data.filters.priceInterval.max)/100).toFixed(0);

      console.log(this.hotels);
      console.log(this.hotels[0].name);

      this.titleService.setTitle(`Hotéis e Pacotes Para ${this.location} | Agência de Viagens - Hurb`);
    })

    this.currentPage = page;
    this.quantity;
    this.place;

    window.scrollTo(0, 0);
  }

  const onSubmit = (searchForm: NgForm) => { 
    this.submitted = true; 
  }

  ngOnInit() {
    
  }

 }