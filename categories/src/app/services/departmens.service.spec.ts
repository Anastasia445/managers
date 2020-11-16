import { TestBed } from '@angular/core/testing';

import { DepartmensService } from './departmens.service';

describe('DepartmensService', () => {
  let service: DepartmensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
