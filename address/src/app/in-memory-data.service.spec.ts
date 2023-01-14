import { TestBed } from '@angular/core/testing';

import { InMemoryDadaService } from './in-memory-data.service';

describe('InMemoryDadaService', () => {
  let service: InMemoryDadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
