import { TestBed } from '@angular/core/testing';

import { CarlistserviceService } from './carlistservice.service';

describe('CarlistserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarlistserviceService = TestBed.get(CarlistserviceService);
    expect(service).toBeTruthy();
  });
});
