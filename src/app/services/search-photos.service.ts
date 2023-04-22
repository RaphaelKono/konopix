import { Injectable } from '@angular/core';
import { environment } from 'src/environment/env';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { PhotosResponseBody } from '../interfaces/photos-response-body';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class SearchPhotosService {

  apiKey = environment.apiKey;
  apiUrl = environment.apiUrl;
  emptyPost = EMPTY;

  constructor(private http: HttpClient) { }

  // searchPhotos(query: string) {
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Client-ID ' + this.apiKey,
  //     'Accept-Version': 'v1',
  //   });
  //   const url = `${this.apiUrl}search/photos?page=1&query=${query}`;
  //   this.posts = this.http.get(url, { headers });
  // }

  getPhotos(query: string): Observable<HttpResponse<PhotosResponseBody>> {
    const headers = new HttpHeaders({
      'Authorization': 'Client-ID ' + this.apiKey,
      'Accept-Version': 'v1'
    });
    const params = new HttpParams().set('page',1).set('query',query);
    const url = `${this.apiUrl}search/photos?`;
    return this.http.get<PhotosResponseBody>(url, { headers, params, observe:'response' });
  }
}
