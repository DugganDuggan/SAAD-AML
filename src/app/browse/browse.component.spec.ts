import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowseComponent } from './browse.component';
import { SearchMediaService } from '../services/search-media.service'; // Replace with actual service if needed

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowseComponent, // Import the standalone component here
        HttpClientTestingModule, // Include HttpClientTestingModule for HttpClient dependencies
      ],
      providers: [SearchMediaService], // Provide necessary services
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateMediaFilter when a genre is toggled', () => { // Filter Test 
    spyOn(component, 'updateMediaFilter');
    const genre = 'Fantasy';
    const event = { target: { checked: true } } as unknown as Event;

    // Simulate toggling a genre filter
    component.toggleGenreSelection(genre, event);
    expect(component.selectedGenres).toContain(genre);
    expect(component.updateMediaFilter).toHaveBeenCalled();

    // Simulate unchecking the filter
    (event.target as HTMLInputElement).checked = false;
    component.toggleGenreSelection(genre, event);
    expect(component.selectedGenres).not.toContain(genre);
    expect(component.updateMediaFilter).toHaveBeenCalledTimes(2);
  });

});
