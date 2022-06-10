import { TestBed } from '@angular/core/testing';

import { ArticulosFamiliasService } from './articulos-familias.service';

describe('ArticulosFamiliasService', () => {
  let service: ArticulosFamiliasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticulosFamiliasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
