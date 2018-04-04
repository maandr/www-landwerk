import { Component, OnInit } from '@angular/core';
import { ImageSlide, SlideData, ImageCarousel } from '../image-carousel/image-carousel.types';

@Component({
  selector: 'landwerk-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  slides: ServiceSlides;

  ngOnInit() {
    this.slides = {
      garden: [],
      forestry: [],
      trees: [],
      machines: [],
      chainsaws: [],
      winter: []
    }
    this.slides.garden = ImageCarousel.loadSlides(require('../data/slides.garden.json'));
    this.slides.forestry = ImageCarousel.loadSlides(require('../data/slides.forestry.json'));
    this.slides.trees = ImageCarousel.loadSlides(require('../data/slides.trees.json'));
    this.slides.machines = ImageCarousel.loadSlides(require('../data/slides.machines.json'));
    this.slides.chainsaws = ImageCarousel.loadSlides(require('../data/slides.chainsaws.json'));
    this.slides.winter = ImageCarousel.loadSlides(require('../data/slides.winter.json'));
  }
}

interface ServiceSlides {
  garden: ImageSlide[];
  forestry: ImageSlide[];
  trees: ImageSlide[];
  machines: ImageSlide[];
  chainsaws: ImageSlide[];
  winter: ImageSlide[];
}
