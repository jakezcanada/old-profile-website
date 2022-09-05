import { Component, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw')

    const options = {
      loop: true
    }

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 20,
      typeColor: 'red'
    })

    writer
      .type('Web Development')
      .rest(500)
      .remove(11)
      .type('Design')
      .rest(500)
      .clear()
      .type('Frontend Development')
      .rest(500)
      .clear()
      .type('Backend Development')
      .rest(500)
      .clear()
      .start()
  }

}
