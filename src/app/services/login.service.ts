import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = signal(false);

  get isLoggedIn() {
    return this.loggedIn();
  }

  loggedInTrue(){
    this.loggedIn = signal(true);
  }
  loggedInFalse(){
    this.loggedIn = signal(false);
  }
  
  constructor() { }
}
