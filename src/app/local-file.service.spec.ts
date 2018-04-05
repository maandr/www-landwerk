import { TestBed, inject } from '@angular/core/testing';

import { LocalFileService } from './local-file.service';

describe('StaticContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalFileService]
    });
  });

  it('should be created', inject([LocalFileService], (service: LocalFileService) => {
    expect(service).toBeTruthy();
  }));
});
