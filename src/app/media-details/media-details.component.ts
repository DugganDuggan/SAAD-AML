import { NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SearchMediaService } from '../services/search-media.service';
import { ActivatedRoute } from '@angular/router';
import { Media } from '../models/media';
import { MediaDetailsService } from '../services/media-details.service';

@Component({
  selector: 'app-media-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './media-details.component.html',
  styleUrl: './media-details.component.css'
})
export class MediaDetailsComponent implements OnInit{

  constructor(private MediaDetailsService: MediaDetailsService, private route: ActivatedRoute) {}

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

  mediaId: number = 0
  media: Media[] = [];


  ngOnInit() {
    this.mediaId = +this.route.snapshot.paramMap.get('id')!;
    this.MediaDetailsService.getData(this.mediaId).subscribe((data: Media[]) => {
      this.media = data.map(item => new Media(item.media_ID, item.title, item.author, item.genre, item.description, item.cover_Image_URL, item.type, item.lanuage, item.publication_Year));
    });
  }

  getTitle(){
   return this.media[0].title
  }
  getImg(){
   return this.media[0].cover_Image_URL
  }
  getAuthor(){
   return this.media[0].author
  }
  getDescription(){
   return this.media[0].description
  }
  getGenre(){
    return this.media[0].genre
  }
  getDate(){
    return this.media[0].publication_Year
  }


}
