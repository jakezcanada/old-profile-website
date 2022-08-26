import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'profile-website';

  ngOnInit(): void {
    AOS.init();
  }

  constructor() {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }
}
