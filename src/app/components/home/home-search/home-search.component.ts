import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchPhotosService } from 'src/app/services/search-photos.service';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent {

  queryHome = new FormControl('', [Validators.required, Validators.pattern('\\S.*')]);

  constructor(public searchPhotos: SearchPhotosService, public route: ActivatedRoute, private router: Router){}

  openSearch() {
    if (this.queryHome.valid && this.queryHome.value)
      this.router.navigate([this.queryHome.value + '&page=' + '1'], { relativeTo: this.route });
  }

}
