import { TestBed } from '@angular/core/testing';

import { TipocuentaService } from './tipocuenta.service';

describe('TipocuentaService', () => {
  let service: TipocuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipocuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
