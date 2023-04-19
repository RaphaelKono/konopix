import { Component } from '@angular/core';
import { environment } from 'src/environment/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { SearchPhotosService } from 'src/app/services/search-photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  apiKey = environment.apiKey;
  apiUrl = environment.apiUrl;
  posts: Observable<any> = EMPTY;

  constructor(private http: HttpClient, public searchPhotos: SearchPhotosService) { }

  // ngOnInit() {
  //   console.log(this.apiKey);
  // }

  // searchPhotos() {
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Client-ID ' + this.apiKey,
  //     'Accept-Version': 'v1'
  //   });
  //   let query = 'office';
  //   const url = `${this.apiUrl}search/photos?page=1&query=${query}`;
  //   this.posts = this.http.get(url, { headers });
  // }

}
