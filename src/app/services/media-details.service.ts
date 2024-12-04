import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from '../models/media';

@Injectable({
  providedIn: 'root'
})
export class MediaDetailsService {
  private apiUrl = 'http://localhost:3000/api/specificMedia';

  constructor(private http: HttpClient) {}
  
  getData(mediaID: number): Observable<Media[]> {
    const params = new HttpParams()
      .set('mediaID', JSON.stringify(mediaID)) // Send genres as a JSON string  
    return this.http.get<Media[]>(this.apiUrl, { params });
  }
  
}
