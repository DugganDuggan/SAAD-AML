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

  getData(type: string){
    switch(type){
      case "title": {
        return this.media[0].title
      }
      case "author": {
        return this.media[0].author
      }
      case "genre":{
        return this.media[0].genre
      }
      case "description": {
        return this.media[0].description
      }
      case "image": {
        return this.media[0].cover_Image_URL
      }
      case "year": {
        return this.media[0].publication_Year
      }
      default: {
        return null
      }
    }
  }

}
