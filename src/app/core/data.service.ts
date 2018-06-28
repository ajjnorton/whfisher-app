import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { IAlbum } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: Http) {
  }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(Response => {
        return Response.json();
      });
  }
}
