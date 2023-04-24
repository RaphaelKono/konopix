import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-list-paginator',
  templateUrl: './search-list-paginator.component.html',
  styleUrls: ['./search-list-paginator.component.scss']
})

export class SearchListPaginatorComponent {

  pageNumber = 1;

  @Input() currentPage!: number;
  @Input() total_pages!: number;
  @Input() queryItem!: string;

  @Output() pageChanged = new EventEmitter<any>();

  page = new FormControl(this.currentPage, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(this.total_pages)]);

  constructor() { }

  ngOnChanges() {
    this.page = new FormControl(this.currentPage, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(this.total_pages)]);
  }

  paginate() {
    if (this.page.valid) {
      this.pageChanged.emit(+this.page.value!);
    }
  }

  movePage(x: number) {
    this.pageChanged.emit(this.currentPage + x);
  }

}
