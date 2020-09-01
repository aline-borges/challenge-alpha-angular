import { Component, OnInit } from '@angular/core';
import { HurbService } from '../service/hurb.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {

  hotels:Array<any>
  location: string

  constructor(private hurbService: HurbService){}

  getLocation(evento: KeyboardEvent){
    this.location = (<HTMLInputElement>evento.target).value;
  }

  getHotels(){
    this.hurbService.getData(this.location ).subscribe((data) => {
      this.hotels = data.results;
      console.log(this.hotels);
    })
  }

  ngOnInit(){}
}
