import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HurbService { 

  stars: Array<any>

  constructor(private http: HttpClient) {}

  getData(location, filter, page, order, limited, quantityStars):Observable<any> {
    if((order === undefined) || (order === null)) {
      order = '&sort=score';
    }

    if((limited === undefined) || (limited === null)) {
      limited = '';
    }

    if((quantityStars === undefined) || (quantityStars === null)) {
      quantityStars = '';
    }

    const type = filter === 'hotel' ? 'hotel' : 'package';
    const url = `https://www.hurb.com/search/api?q=${location}&filters=is_${type}|1,${quantityStars}${limited}&page=${page}${order}`;
  
    return this.http.get<any>(url);
  }
}
