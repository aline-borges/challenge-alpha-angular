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

  ngOnInit(): void {
  }

}
