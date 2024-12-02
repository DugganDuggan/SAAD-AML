import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchMediaService } from '../services/search-media.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit{
  genres = signal(['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Dystopian', 'Action & Adventure', 'Mystery', 'Horror', 'Thriller ', 'Romance', 'Graphic Novel', 'Short Story', 'Childrens', 'History', 'True Crime', 'Educational', 'Science & Technology']);
  types = signal(['Book', 'Journal', 'Periodical', 'CD', 'DVD', 'Game'])

  selectedOption = signal<string | null>(null);

  // Function to handle selection
  onFilterChange(selected: string): void {
    this.selectedOption.set(selected);
  }

  
  data: any[] = [];
  rows: number[] = []; // number of rows of media
  counter: number = 0;
  imageUrl: string = "";
  columns: number[] = [1, 2, 3, 4]

  constructor(private SearchMediaService: SearchMediaService) {}

  ngOnInit() {
      this.SearchMediaService.getData().subscribe(
          (response) => {
              this.data = response;
              this.setRows();          },
          (error) => {
              console.error('Error fetching data:', error);
          }
      );

  }
  setRows(): void {
    const numberOfRows = Math.ceil(this.data.length / 4);  // Divide by 3 and round up
    this.rows = new Array(numberOfRows);  // Create an array with that many elements
  }


  getTitle(){
    try{
      this.imageUrl = this.data[this.counter].cover_Image_URL
      return this.data[this.counter].title
    }
    catch{
      return null
    }
  }

  getRow(){
    this.counter = this.counter + 1
    return (this.counter - 1)
  }
}
