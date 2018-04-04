import { Component, OnInit } from '@angular/core';
import { ImageSlide } from '../image-carousel/image-carousel.component';

@Component({
  selector: 'landwerk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: ImageSlide[];

  ngOnInit() {
    this.slides = [
      { src: '../../assets/images/slider/4.jpg', alt: 'Garten- und Landschaftsbau' },
      { src: '../../assets/images/slider/35.jpg', alt: 'Forstarbeiten' },
      { src: '../../assets/images/slider/12.jpg', alt: 'Baumarbeiten' },
      { src: '../../assets/images/slider/11.jpg', alt: 'Maschineneinsatz' },
      { src: '../../assets/images/slider/14.jpg', alt: 'Motorsägenseminare & Schulungen' },
      { src: '../../assets/images/slider/38.jpg', alt: 'Winterdienstarbeiten' }
    ];
  }
}