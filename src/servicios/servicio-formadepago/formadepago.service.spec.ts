import { TestBed } from '@angular/core/testing';

import { FormadepagoService } from './formadepago.service';

describe('FormadepagoService', () => {
  let service: FormadepagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormadepagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
