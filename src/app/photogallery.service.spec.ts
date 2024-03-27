import { TestBed } from '@angular/core/testing';

import { PhotogalleryService } from './photogallery.service';

describe('PhotogalleryService', () => {
  let service: PhotogalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotogalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
