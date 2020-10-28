import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle(`Página Não Encontrada | Agência de Viagens - Hurb`);
  }

  changeTitle() {
    this.titleService.setTitle(`Hotéis, Resorts, Pacotes e mais - Agência de Viagens | Hurb`);
  }

  ngOnInit(): void {
  }

}
