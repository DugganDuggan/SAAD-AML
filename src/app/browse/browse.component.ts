import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [NgFor],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  genres = signal(['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Dystopian', 'Action & Adventure', 'Mystery', 'Horror', 'Thriller ', 'Romance', 'Graphic Novel', 'Short Story', 'Childrens', 'History', 'True Crime', 'Educational', 'Science & Technology']);
  types = signal(['Book', 'Journal', 'Periodical', 'CD', 'DVD', 'Game'])

  selectedOption = signal<string | null>(null);

  // Function to handle selection
  onFilterChange(selected: string): void {
    this.selectedOption.set(selected);
  }

}
