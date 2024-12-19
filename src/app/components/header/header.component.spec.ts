import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // To mock observables
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent, // Import the standalone component
      ],
      providers: [
        {
          provide: ActivatedRoute, // Mock ActivatedRoute
          useValue: {
            params: of({ id: '123' }), // Mock route parameters
            snapshot: {
              paramMap: {
                get: (key: string) => '123', // Mock paramMap for snapshot
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('a.nav-link').length).toBeGreaterThan(0);
  });
  
});
