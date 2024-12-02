import { NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SearchMediaService } from '../services/search-media.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './media-details.component.html',
  styleUrl: './media-details.component.css'
})
export class MediaDetailsComponent implements OnInit{

  constructor(private SearchMediaService: SearchMediaService, private route: ActivatedRoute) {}

  borrowHidden = signal(false); // Initial state is hidden
  reserveHidden = signal(false); // Initial state is hidden

  showBorrowPopup(){
    this.borrowHidden.set(!this.borrowHidden());
    console.log(this.borrowHidden())
  }

  showReservePopup() {
    this.reserveHidden.set(!this.reserveHidden());
    console.log(this.reserveHidden())

  }


  data: any[] = [];
  mediaID: string | null = null;

  ngOnInit() {
    this.mediaID = this.route.snapshot.paramMap.get('id');
      this.SearchMediaService.getData().subscribe(
          (response) => {
              this.data = response;
          },
          (error) => {
              console.error('Error fetching data:', error);
          }
      );
  }

  getTitle(){
    return this.data[Number(this.mediaID)].title
  }
  getImg(){
    return this.data[Number(this.mediaID)].cover_Image_URL
  }
  getAuthor(){
    return this.data[Number(this.mediaID)].author
  }
  getDescription(){
    return this.data[Number(this.mediaID)].description
  }
  getGenre(){
    return this.data[Number(this.mediaID)].genre
  }
  getDate(){
    return this.data[Number(this.mediaID)].publication_Year
  }


}
