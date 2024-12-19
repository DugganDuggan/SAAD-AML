import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // To mock observables
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Import the standalone component
      providers: [
        {
          provide: ActivatedRoute, // Mock ActivatedRoute
          useValue: {
            params: of({}), // Provide an observable for route params
            snapshot: {
              paramMap: {
                get: (key: string) => null, // Mock paramMap for snapshot
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'SAAD-AML' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SAAD-AML');
  });
});
