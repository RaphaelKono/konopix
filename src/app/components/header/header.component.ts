import { Component } from '@angular/core';
import { SearchPhotosService } from 'src/app/services/search-photos.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  query = new FormControl('',[Validators.required]);

  constructor(private searchPhotos: SearchPhotosService) {
  }

  search() {
    if (this.query.valid && this.query.value) {
      this.searchPhotos.searchPhotos(this.query.value);
    }
  
  }
}
