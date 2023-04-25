import { Injectable } from '@angular/core';
import { environment } from 'src/environment/env';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, catchError, throwError } from 'rxjs';
import { PhotosResponseBody } from '../interfaces/photos-response-body';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { PhotoDetail } from '../interfaces/photo-detail';

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

  constructor(private http: HttpClient, private router: Router) { }

  getPhotos(query: string, page: number): Observable<HttpResponse<PhotosResponseBody>> {
    const headers = this.headers;
    const params = new HttpParams().set('page', page).set('query', query);
    const url = `${this.apiUrl}search/photos?`;
    return this.http.get<PhotosResponseBody>(url, { headers, params, observe: 'response' })
    .pipe(catchError(this.handleError));
  }

  getPhoto(id: string): Observable<PhotoDetail> {
    const headers = this.headers;
    const url = `${this.apiUrl}/photos/${id}`;
    return this.http.get<PhotoDetail>(url, { headers })
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): Observable<never>{
    return throwError(error);
  }

  openSearch(query: FormControl, route: ActivatedRoute) {
    if (query.valid && query.value)
      this.router.navigate([query.value + '&page=' + '1'], { relativeTo: route });
  }
}
