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
  
}
