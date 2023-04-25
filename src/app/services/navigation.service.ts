import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  queryItem: string = '';
  current_page: number = 1;

  constructor() { }
}
