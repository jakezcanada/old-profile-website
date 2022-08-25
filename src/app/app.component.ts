import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile-website';

  constructor() {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }
}
