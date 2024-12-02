import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchMediaService } from '../services/search-media.service';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit{
  genres = signal(['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Dystopian', 'Action & Adventure', 'Mystery', 'Horror', 'Thriller ', 'Romance', 'Graphic Novel', 'Short Story', 'Childrens', 'History', 'True Crime', 'Educational', 'Science & Technology']);
  selectedGenres: string[] = []; // Array to hold selected genres

  types = signal(['Book', 'Journal', 'Periodical', 'CD', 'DVD', 'Game'])
  selectedTypes: string[] = [];
  
  selectedOption = signal<string | null>(null);

  // Function to handle selection
  toggleSelection(genre: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      // Add genre to selectedGenres if checked
      this.selectedGenres.push(genre);
    } else {
      // Remove genre from selectedGenres if unchecked
      this.selectedGenres = this.selectedGenres.filter(g => g !== genre);
    }  
    this.updateMediaFilter()
  }

  data: any[] = [];
  filterData: any[] = [];

  updateMediaFilter(){
    this.filterData = []
    for (let item in this.data){
      if (this.selectedGenres.includes(this.data[item].genre) && this.selectedTypes.includes(this.data[item].type)){
        this.filterData.push(item)
      }
    }

    
  }

  
  rows: number[] = []; // number of rows of media
  counter: number = 0;
  imageUrl: string = "";
  columns: number[] = [1, 2, 3, 4]

  constructor(private SearchMediaService: SearchMediaService) {}

  ngOnInit() {
      this.SearchMediaService.getData().subscribe(
          (response) => {
              this.data = response;
              this.filterData = this.data
              this.setRows();          },
          (error) => {
              console.error('Error fetching data:', error);
          }
      );

  }
  setRows(): void {
    const numberOfRows = Math.ceil(this.filterData.length / 4);  // Divide by 3 and round up
    this.rows = new Array(numberOfRows);  // Create an array with that many elements
  }


  getTitle(){
    try{
      this.imageUrl = this.filterData[this.counter].cover_Image_URL
      return this.filterData[this.counter].title
    }
    catch{
      return null
    }
  }

  getRow(){
    this.counter = this.counter + 1
    return (this.counter - 1)
  }

  filter(){

  }
}
