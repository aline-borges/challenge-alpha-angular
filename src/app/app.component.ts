import { Component } from '@angular/core';

const getAPI = async () => {
  const response = await fetch(
    `https://www.hurb.com/search/api?q=${'buzios'}`
  );

  const data = await response.json();
  console.log(data);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'challenge-alpha-angular';
}
