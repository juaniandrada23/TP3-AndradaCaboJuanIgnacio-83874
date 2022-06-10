import { TestBed } from '@angular/core/testing';

import { MockArticulosService } from './mock-articulos.service';

describe('MockArticulosService', () => {
  let service: MockArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
