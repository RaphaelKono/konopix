import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchPhotosService } from 'src/app/services/search-photos.service';
import { Photo } from 'src/app/interfaces/photo';
import { PhotosResponseBody } from 'src/app/interfaces/photos-response-body';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  queryItem: string = '';
  photos: Photo[] = [];
  httpHeader: string | null = '';
  col1: Photo[] = [];
  col2: Photo[] = [];
  col3: Photo[] = [];


  constructor(private route: ActivatedRoute, private searchPhotos: SearchPhotosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => this.search(params.id));
  }

  search(queryItem: string) {
    this.queryItem = queryItem;
    this.searchPhotos.getPhotos(this.queryItem).subscribe((response: HttpResponse<PhotosResponseBody>) => this.setSearchData(response));
  }

  setSearchData(response: HttpResponse<PhotosResponseBody>) {
    this.httpHeader = response.headers.get('link');
    this.photos = response.body!.results;
    this.resetColumns();
    this.fillColumns();
    console.log(this.col1, this.col2, this.col3)
  }

  resetColumns() {
    this.col1 = [];
    this.col2 = [];
    this.col3 = [];
  }

  fillColumns() {
    for (let i = 0; i < this.photos.length; i++) {
      const element = this.photos[i];
      if ((i+1) % 2 === 0 && (i+1) % 3 !== 0)
        this.col2.push(element);
      else if ((i+1) % 3 === 0)
        this.col3.push(element)
      else
        this.col1.push(element);
    }
  }

}
