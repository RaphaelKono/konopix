import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListPaginatorComponent } from './search-list-paginator.component';

describe('SearchListPaginatorComponent', () => {
  let component: SearchListPaginatorComponent;
  let fixture: ComponentFixture<SearchListPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchListPaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchListPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
