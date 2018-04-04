import { Component, OnInit } from '@angular/core';
import { ImageSlide } from '../image-carousel/image-carousel.types'

const dataJson: SlideData = require('../data/slides.home.json');

@Component({
  selector: 'landwerk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: ImageSlide[];

  ngOnInit() {
    this.fetchSlides();
  }

  private fetchSlides() {
    this.slides = [];
    dataJson.slides.forEach((slide) => {
      this.slides.push({
        src: dataJson.imageBaseDir + slide.src,
        alt: slide.alt,
        caption: (slide.caption) ? slide.caption : null,
        href: (slide.href) ? slide.href : null
      })
    });
  }
}

interface SlideData {
  imageBaseDir: string;
  slides: ImageSlide[];
}