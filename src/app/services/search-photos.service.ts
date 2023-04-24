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

  getPhotos(query: string, page:number): Observable<HttpResponse<PhotosResponseBody>> {
    const headers = new HttpHeaders({
      'Authorization': 'Client-ID ' + this.apiKey,
      'Accept-Version': 'v1'
    });
    const params = new HttpParams().set('page',page).set('query',query);
    const url = `${this.apiUrl}search/photos?`;
    return this.http.get<PhotosResponseBody>(url, { headers, params, observe:'response' });
  }
}
