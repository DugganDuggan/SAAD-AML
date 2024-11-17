import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  template: `
  <app-header/>
  <main>
    <router-outlet/>
  </main>
`,
  styles: [
    `
    main{
      padding-top: 5%;
    }
    `
  ],
})
export class AppComponent {
  title = 'SAAD-AML';
}
