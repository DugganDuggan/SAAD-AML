import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = signal(false);

  get isLoggedIn() {
    return this.loggedIn();
  }

  updateLogIn() {
    this.loggedIn.update((loggedIn) => !loggedIn);
  }

  constructor() { }
}
