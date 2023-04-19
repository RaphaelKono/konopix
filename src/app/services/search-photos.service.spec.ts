import { TestBed } from '@angular/core/testing';

import { SearchPhotosService } from './search-photos.service';

describe('SearchPhotosService', () => {
  let service: SearchPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
