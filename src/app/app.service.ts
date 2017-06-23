import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AppService {
  constructor(private http: Http) {}
  postData(serverData: any[], url: string){
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://post-proof.firebaseio.com/data.json',
    return this.http.post(url, serverData, {headers: headers});
  }
  getData(url: string){
    return this.http.get(url);
  }
}
