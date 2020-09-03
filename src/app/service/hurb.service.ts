import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HurbService {

  constructor(private http: HttpClient) {}

  getData(location, filter, page):Observable<any> {
    const type = filter === 'hotel' ? 'hotel' : 'package';
    const url = `https://www.hurb.com/search/api?q=${location}&filters=is_${type}|1&page=${page}`;
  
    return this.http.get<any>(url);
  }
}
