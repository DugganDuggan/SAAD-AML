import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

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

}
