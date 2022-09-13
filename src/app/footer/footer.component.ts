import { Component, OnInit, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() scrollClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  scroll(event: any, el: String){
    this.scrollClick.emit(el);
  }
}
