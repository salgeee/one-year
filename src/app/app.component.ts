import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {StoryCarouselComponent} from './story-carousel/story-carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    StoryCarouselComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  startDate = new Date(2016,8,1);
  years: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  timer: any;

  ngOnInit() {

    this.updateCounter();

    this.timer = setInterval(() => this.updateCounter(), 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  updateCounter() {
    const now = new Date();


    let years = now.getFullYear() - this.startDate.getFullYear();
    let anniversary = new Date(now.getFullYear(), this.startDate.getMonth(), this.startDate.getDate());

    if (now < anniversary) {
      years--;
      anniversary = new Date(now.getFullYear() - 1, this.startDate.getMonth(), this.startDate.getDate());
    }


    const diff = now.getTime() - anniversary.getTime();

    let remaining = diff;
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    remaining -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    remaining -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(remaining / (1000 * 60));
    remaining -= minutes * (1000 * 60);
    const seconds = Math.floor(remaining / 1000);

    this.years = years;
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}
