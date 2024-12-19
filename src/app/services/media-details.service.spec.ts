import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { MediaDetailsService } from './media-details.service';

describe('MediaDetailsService', () => {
  let service: MediaDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Include HttpClientTestingModule
    });
    service = TestBed.inject(MediaDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
