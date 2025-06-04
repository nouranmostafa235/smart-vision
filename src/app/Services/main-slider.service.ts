import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainSliderService {

  constructor(private http: HttpClient) { }

  getSliders():Observable<any> {
    return this.http.get("http://localhost:3000/mainSliderItems")
  }
}
