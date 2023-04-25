import { Injectable } from '@angular/core';
import { environment } from 'src/environment/env';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, catchError, throwError } from 'rxjs';
import { PhotosResponseBody } from '../interfaces/photos-response-body';

@Injectable({
  providedIn: 'root'
})
export class SearchPhotosService {

  apiKey = environment.apiKey;
  apiUrl = environment.apiUrl;
  emptyPost = EMPTY;
  headers = new HttpHeaders({
    'Authorization': 'Client-ID ' + this.apiKey,
    'Accept-Version': 'v1'
  });;

  constructor(private http: HttpClient) { }

  getPhotos(query: string, page: number): Observable<HttpResponse<PhotosResponseBody>> {
    const headers = this.headers;
    const params = new HttpParams().set('page', page).set('query', query);
    const url = `${this.apiUrl}search/photos?`;
    return this.http.get<PhotosResponseBody>(url, { headers, params, observe: 'response' })
    .pipe(catchError(this.handleError));
  }

  getPhoto(id: string): Observable<any> {
    const headers = this.headers;
    const url = `${this.apiUrl}/photos/${id}`;
    return this.http.get<any>(url, { headers })
    .pipe(catchError(this.handleError));;
  }

  handleError(error: HttpErrorResponse): Observable<never>{
    return throwError(error);
  }
}
