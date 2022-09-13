import {Component, OnInit} from '@angular/core';

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

  constructor() {}

  scroll(el: any) {
    console.log(el);
    el.scrollIntoView({behavior: "smooth"});
  }
}
