import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  contactNumber: string = '';
  address: string = '';
  subscriptionPreferences: string = ''; // Optional: Adjust as needed

  // Function to handle registration form submission
  onRegister(form: NgForm): void {
    if (form.valid) {
      console.log('Registration Successful!');
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Contact Number:', this.contactNumber);
      console.log('Address:', this.address);
      console.log('Subscription Preferences:', this.subscriptionPreferences);

      // Simulate API call to register the user
      alert('Registration successful. Redirecting to login...');
      // Example: Redirect to login page
      // this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid');
      alert('Please fill in all required fields correctly.');
    }
  }

  // Function to handle subscription preference selection
  onSelectSubscription(option: string): void {
    this.subscriptionPreferences = option;
    console.log('Subscription Preference:', option);
  }
}
