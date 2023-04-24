import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListInfoComponent } from './search-list-info.component';

describe('SearchListInfoComponent', () => {
  let component: SearchListInfoComponent;
  let fixture: ComponentFixture<SearchListInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchListInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
