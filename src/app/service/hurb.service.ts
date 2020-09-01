import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HurbService {

  constructor(private http: HttpClient) {}

  getData(location):Observable<any> {
    const url = `https://www.hurb.com/search/api?q=${location}`;

    return this.http.get<any>(url);
  }
}
