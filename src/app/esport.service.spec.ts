import { TestBed } from '@angular/core/testing';

import { EsportService } from './esport.service';

describe('EsportService', () => {
  let service: EsportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
