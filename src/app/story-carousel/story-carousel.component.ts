import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule} from '@angular/common';
import { register } from 'swiper/element/bundle';

// Registra os elementos do Swiper (Web Components)
register();

@Component({
  selector: 'app-story-carousel',
  imports:[CommonModule],
  template: `
    <swiper-container
      slides-per-view="1"
      autoplay="true"
      autoplay-delay="3000"
      navigation="true"
      pagination="true"
      style="width: 100%; height: 30%; display: flex; align-items: center; justify-content: center;
      ">
      <swiper-slide *ngFor="let image of images"  style="display: flex; align-items: center; justify-content: center;">
        <img [src]="image" alt="Story image" style="width: 360px; height: 640px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
      </swiper-slide>
    </swiper-container>
  `,
  styleUrls: ['./story-carousel.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoryCarouselComponent {
  images = [
    'assets/stories/photo1.jpeg',
    'assets/stories/photo2.jpeg',
    'assets/stories/photo3.jpeg',
    'assets/stories/photo4.jpeg',
    'assets/stories/photo5.jpeg',
    'assets/stories/photo6.jpeg',
    'assets/stories/photo7.jpeg',
    'assets/stories/photo8.jpeg',
    'assets/stories/photo9.jpeg',
    'assets/stories/photo10.jpeg',
    'assets/stories/photo11.jpeg'
  ];
}
