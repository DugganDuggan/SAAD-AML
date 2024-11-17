import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PageComponent],
  template: `
  <app-header/>
  <main>
    <app-page/>
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
