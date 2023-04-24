import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  total: number = 0;
  total_pages: number = 0;
  currentPage: number = 1;


  constructor(private route: ActivatedRoute, private searchPhotos: SearchPhotosService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => this.search(params.id));
  }

  search(queryItem: string) {
    let items = queryItem.split('&');
    let pageItems = items[1].split('=');
    this.currentPage = +pageItems[1];
    this.queryItem = items[0];
    this.searchPhotos.getPhotos(this.queryItem, this.currentPage).subscribe((response: HttpResponse<PhotosResponseBody>) => this.setSearchData(response));
  }

  setSearchData(response: HttpResponse<PhotosResponseBody>) {
    this.httpHeader = response.headers.get('link');
    this.photos = response.body!.results;
    this.setPaginator(response.body!.total, response.body!.total_pages);
    this.resetColumns();
    this.fillColumns();
  }

  resetColumns() {
    this.col1 = [];
    this.col2 = [];
    this.col3 = [];
  }

  setPaginator(total: number, total_pages: number) {
    this.total = total;
    this.total_pages = total_pages;
  }

  fillColumns() {
    for (let i = 0; i < this.photos.length; i++) {
      const element = this.photos[i];
      if ((i + 1) % 2 === 0 && (i + 1) % 3 !== 0)
        this.col2.push(element);
      else if ((i + 1) % 3 === 0)
        this.col3.push(element)
      else
        this.col1.push(element);
    }
  }

  onPageChanged($event: any) {
    if (this.currentPage !== $event) {
      this.currentPage = $event;
      this.router.navigate([`${this.queryItem}&page=${this.currentPage}`]);
    }
  }

  loadMore() {
    this.router.navigate([`${this.queryItem}&page=${this.currentPage + 1}`]);
  }

}
