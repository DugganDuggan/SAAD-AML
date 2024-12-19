import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchMediaService } from './search-media.service';

describe('SearchMediaService', () => {
  let service: SearchMediaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchMediaService],
    });

    service = TestBed.inject(SearchMediaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify no outstanding HTTP requests
  });

  it('should perform a search query', (done) => {
    const mockResponse = [
      {
        media_ID: 70,
        title: 'If I Die in a Combat Zone',
        author: 'Tim O’Brien',
        genre: 'Vietnam War, 1961-1975',
        description: 'Perhaps the best book to emerge from the Vietnam War...',
        cover_Image_URL: 'http://books.google.com/books/content?id=...',
        type: 'Book',
        publication_Year: 2003,
      },
    ];

    service.searchData('1').subscribe((results) => {
      expect(results.length).toBe(1);
      expect(results[0].title).toBe('If I Die in a Combat Zone');
      done();
    });

    // Update the expected URL to match the service's actual request
    const req = httpMock.expectOne('http://localhost:3000/api/searchMedia?searchTerm=1');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); // Respond with mock data
  });
});
