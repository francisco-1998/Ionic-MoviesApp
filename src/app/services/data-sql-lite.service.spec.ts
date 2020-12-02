import { TestBed } from '@angular/core/testing';

import { DataSqlLiteService } from './data-sql-lite.service';

describe('DataSqlLiteService', () => {
  let service: DataSqlLiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSqlLiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
