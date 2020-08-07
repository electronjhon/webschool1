import { TestBed } from '@angular/core/testing';

import { ApiCursosService } from './api-cursos.service';

describe('ApiCursosService', () => {
  let service: ApiCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
