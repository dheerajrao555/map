import { TestBed } from '@angular/core/testing';

import { CandeativeService } from './candeative.service';

describe('CandeativeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandeativeService = TestBed.get(CandeativeService);
    expect(service).toBeTruthy();
  });
});
