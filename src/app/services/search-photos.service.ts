import { Injectable } from '@angular/core';
import { environment } from 'src/environment/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchPhotosService {

  apiKey = environment.apiKey;
  apiUrl = environment.apiUrl;
  posts: Observable<any> = EMPTY;
  emptyPost = EMPTY;

  constructor(private http: HttpClient) { }

  searchPhotos(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Client-ID ' + this.apiKey,
      'Accept-Version': 'v1'
    });
    const url = `${this.apiUrl}search/photos?page=1&query=${query}`;
    this.posts = this.http.get(url, { headers });
  }
}
