import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchMediaService } from '../services/search-media.service';
import {ReactiveFormsModule} from '@angular/forms';
import { Media } from '../models/media';


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit{
  genres = signal(["Adventure", "Biography", "Comics", "Crime", "Drama", "Fantasy", "Fiction", "Graphic Novels", "History", "Horror", "Mystery", "Other", "Philosophy", "Poetry", "Psychology", "Religion", "Romance", "Self-Help", "Short Stories", "Social Science"]);
  selectedGenres: string[] = []; // Array to hold selected genres

  types = signal(['Book', 'Journal', 'Periodical', 'CD', 'DVD', 'Game'])
  selectedTypes: string[] = [];
  
  selectedOption = signal<string | null>(null);


  mediaList: Media[] = [];

  rows: number[] = []; // number of rows of media

  counter: number = 0;
  imageUrl: string = "";
  columns: number[] = [1, 2, 3, 4]

  sortOption: string = ""


  constructor(private SearchMediaService: SearchMediaService) {}

  ngOnInit() {
    this.updateMediaFilter()
  }

  // Function to handle selection
  toggleGenreSelection(genre: string, event: Event): void {
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

  toggleTypeSelection(type: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      // Add genre to selectedGenres if checked
      this.selectedTypes.push(type);
    } else {
      // Remove genre from selectedGenres if unchecked
      this.selectedTypes = this.selectedTypes.filter(g => g !== type);
    }  
     this.updateMediaFilter()
  }


  updateMediaFilter(){
    this.SearchMediaService.getData(this.selectedGenres, this.selectedTypes, this.sortOption).subscribe((data: Media[]) => {
      this.mediaList = data.map(item => new Media(item.media_ID, item.title, item.author, item.genre, item.description, item.cover_Image_URL, item.type, item.lanuage, item.publication_Year));
      this.setRows()
      this.counter = 0
    });

    }

    sortMedia(event: Event){
      this.sortOption = (event.target as HTMLInputElement).value
      this.updateMediaFilter()
    }
  


  setRows(): void {
    const numberOfRows = Math.ceil(this.mediaList.length / 4);  // Divide by 3 and round up
    this.rows = new Array(numberOfRows);  // Create an array with that many elements
  }

  getData(type: string){
    switch(type){
      case "title": {
        try {return this.mediaList[this.counter].title}
        catch {return null}
      }
      case "image": {
        return this.mediaList[this.counter].cover_Image_URL
      }
      case "ID": {
        this.counter = this.counter + 1
        return this.mediaList[this.counter - 1].media_ID
      }
      default: {
        return null
      }
    }
  }  

  onSearch(searchValue: string){

    this.SearchMediaService.searchData(searchValue).subscribe((data: Media[]) => {
      this.mediaList = data.map(item => new Media(item.media_ID, item.title, item.author, item.genre, item.description, item.cover_Image_URL, item.type, item.lanuage, item.publication_Year));
      this.setRows()
      this.counter = 0
  })}

}
