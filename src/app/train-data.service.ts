import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Train } from './homepage/homepage.component';
@Injectable({
  providedIn: 'root'
})
export class TrainDataService {
  constructor(private http: HttpClient) { }

  // private apiBaseUrl = 'https://triancheck.onrender.com/api/';
    private apiBaseUrl = 'https://trainapi-166m.onrender.com/api'
  public gettrain(): Promise<Train[]> {
    const url: string = `${this.apiBaseUrl}/traininfo`;
      console.log('Request URL:', url);
    //   const url: string = 'http://localhost:3000/api/traininfo'
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Train[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
