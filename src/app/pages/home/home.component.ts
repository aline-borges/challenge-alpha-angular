import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  typeSearchOption: string
  name: string

  constructor() { }

  const onSendTypeSearch = (event) => {
    this.typeSearchOption = event;
  }

  const changeBackgroundImage = () => {
 
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

  const sendLocationToInput = () => {
    this.name = (<HTMLInputElement>document.getElementById('place-name')).value;
    let input = (<HTMLInputElement>document.getElementById('search-input'));
    input.value = this.name;

    return this.name
  }
  
  ngOnInit(){
    this.changeBackgroundImage();
  }
}
