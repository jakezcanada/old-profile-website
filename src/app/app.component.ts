import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'profile-website';

  ngOnInit(): void {
    //AOS.init({ startEvent: 'load' });
  }

  constructor(private viewportScroller: ViewportScroller) {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }
}
