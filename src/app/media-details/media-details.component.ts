import { NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SearchMediaService } from '../services/search-media.service';

@Component({
  selector: 'app-media-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './media-details.component.html',
  styleUrl: './media-details.component.css'
})
export class MediaDetailsComponent {

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

  constructor(private SearchMediaService: SearchMediaService) {}

  click() {
      this.SearchMediaService.getData().subscribe(
          (response) => {
              this.data = response;
              console.log(this.data[0].title)
          },
          (error) => {
              console.error('Error fetching data:', error);
          }
      );
  }


}
