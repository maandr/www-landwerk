import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'landwerk-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {

  @Input() slides: ImageSlide[];
  @Input() name: string;

  carousel: Carousel;
  index: number;

  ngOnInit() {
    this.initialize();
  }

  private initialize() {
    this.carousel = {
      name: this.name,
      id: '#' + this.name
    };
    this.index = 0;
  }

  onIndicatorClick(slide: ImageSlide) {
    this.index = this.slides.indexOf(slide);
  }

  onNext() {
    this.index = (this.index + 1) % this.slides.length;
  }

  onPrevious() {
    this.index = (this.index == 0)
     ? (this.slides.length - 1)
     : this.index - 1;
  }
}

export interface Carousel {
  name: string;
  id: string;
}

export interface ImageSlide {
  src: string;
  alt: string;
}
