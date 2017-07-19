import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()
    export class ContactService {

      constructor(private http: Http) {}
         postEmail(firstName: String, lastName: String, email: String, message: String){

          let headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'

          });

          let url = "http://formspree.io/zodiacnorma@gmail.com";

          let data = `firstName=${firstName}&lastName=${lastName}&email=${email}&message=${message}`;

          return this.http.post(url, data, { headers: headers })
      }
}
