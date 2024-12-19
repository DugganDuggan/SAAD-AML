import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // To mock observables
import { MediaDetailsComponent } from './media-details.component';
import { MediaDetailsService } from '../services/media-details.service'; // Adjust the path if necessary

describe('MediaDetailsComponent', () => {
  let component: MediaDetailsComponent;
  let fixture: ComponentFixture<MediaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MediaDetailsComponent, // Import the standalone component
        HttpClientTestingModule, // Include HttpClientTestingModule for HttpClient dependencies
      ],
      providers: [
        MediaDetailsService, // Provide the service if needed
        {
          provide: ActivatedRoute, // Mock ActivatedRoute
          useValue: {
            params: of({ id: '1' }), // Mock route parameters as an observable
            snapshot: {
              paramMap: {
                get: (key: string) => (key === 'id' ? '1' : null), // Mock paramMap.get()
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display media title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('Sample Media');
  });

  
});
