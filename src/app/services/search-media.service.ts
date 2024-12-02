import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchMediaService {
private apiUrl = 'http://localhost:3000/api/data';

private cachedData: any = null; // Cache for data

constructor(private http: HttpClient) {}

getData(): Observable<any> {
  // If data is already cached, return it as an Observable
  if (this.cachedData) {
    return this.cachedData;
  }

  // Otherwise, fetch from API and store it in the cache
  this.cachedData = this.http.get<any>(this.apiUrl);

  return this.cachedData
}


}
