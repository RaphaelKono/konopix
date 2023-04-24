import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-list-info',
  templateUrl: './search-list-info.component.html',
  styleUrls: ['./search-list-info.component.scss']
})
export class SearchListInfoComponent {

  @Input() total!: number;
  @Input() queryItem!: string;

}
