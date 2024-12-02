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
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  address1: string = '';
  address2: string = '';
  address3: string = '';
  postcode: string = '';

  onRegister() {
    console.log('Registration submitted!');
    console.log({
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address1: this.address1,
      address2: this.address2,
      address3: this.address3,
      postcode: this.postcode,
    });
  }
}
