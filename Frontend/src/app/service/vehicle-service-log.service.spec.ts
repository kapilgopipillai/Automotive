import { TestBed } from '@angular/core/testing';

import { VehicleServiceLogService } from './vehicle-service-log.service';

describe('VehicleServiceLogService', () => {
  let service: VehicleServiceLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleServiceLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
