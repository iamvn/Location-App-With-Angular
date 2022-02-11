import { TestBed } from '@angular/core/testing';

import { LoadLocationsService } from './load-locations.service';

describe('LoadLocationsService', () => {
  let service: LoadLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
