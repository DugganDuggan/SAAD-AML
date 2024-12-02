import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  contactNumber: string = '';
  address: string = '';
  subscriptionPreference: string = '';

  // Handle registration submission
  onRegister() {
    console.log('Register clicked');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Contact Number:', this.contactNumber);
    console.log('Address:', this.address);
    console.log('Subscription Preference:', this.subscriptionPreference);
  }
}
