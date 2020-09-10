import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HurbService {
  constructor(private http: HttpClient) {}

  getData(location, filter, page, order, limited):Observable<any> {
    if((order === undefined) || (order === null)) {
      order = '' ;
    }

    if((limited === undefined) || (limited === null)) {
      limited = '';
    }

    const type = filter === 'hotel' ? 'hotel' : 'package';
    const url = `https://www.hurb.com/search/api?q=${location}&filters=is_${type}|${limited}1&page=${page}${order}`;
  
    return this.http.get<any>(url);
  }
}
