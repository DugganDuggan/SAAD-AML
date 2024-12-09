import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from '../models/media';

@Injectable({
  providedIn: 'root'
})
export class SearchMediaService {
private getapiUrl = 'http://localhost:3000/api/browseMedia';
private searchapiUrl = 'http://localhost:3000/api/searchMedia'

constructor(private http: HttpClient) {}

getData(genres: string[], types: string[], sort: string): Observable<Media[]> {
  const params = new HttpParams()
    .set('genres', JSON.stringify(genres)) // Send genres as a JSON string
    .set('types', JSON.stringify(types))  // Send types as a JSON string
    .set('sort', sort)

  return this.http.get<Media[]>(this.getapiUrl, { params });
}

searchData(searchTerm: string): Observable<Media[]>{
  const params = new HttpParams()
    .set('searchTerm', searchTerm);

  return this.http.get<Media[]>(this.searchapiUrl, { params });
}

}
