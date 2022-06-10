import { TestBed } from '@angular/core/testing';

import { MockArticulosFamiliasService } from './mock-articulos-familias.service';

describe('MockArticulosFamiliasService', () => {
  let service: MockArticulosFamiliasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockArticulosFamiliasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
