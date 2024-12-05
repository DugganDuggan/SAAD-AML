import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from '../models/media';

@Injectable({
  providedIn: 'root'
})
export class SearchMediaService {
private apiUrl = 'http://localhost:3000/api/browseMedia';


constructor(private http: HttpClient) {}

getData(genres: string[], types: string[], sort: string, page: number, perPage: number): Observable<Media[]> {
  const params = new HttpParams()
    .set('genres', JSON.stringify(genres)) // Send genres as a JSON string
    .set('types', JSON.stringify(types))  // Send types as a JSON string
    .set('sort', sort)
    .set('page', page)
    .set('perPage', perPage);

  return this.http.get<Media[]>(this.apiUrl, { params });
}

}
