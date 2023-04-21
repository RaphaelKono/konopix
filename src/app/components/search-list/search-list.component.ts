import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchPhotosService } from 'src/app/services/search-photos.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  queryItem: string = '';

  constSearchItem: any = {};


  constructor(private route: ActivatedRoute, private http: HttpClient, public searchPhotos: SearchPhotosService) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params: any) => this.search(params.id));
    this.http.get('assets/test/test.json').subscribe(data => {
      this.constSearchItem = data;
      console.log(this.constSearchItem.results);
    });
  }

  search(queryItem: string) {
    this.queryItem = queryItem;
    this.searchPhotos.searchPhotos(this.queryItem);
  }

}
